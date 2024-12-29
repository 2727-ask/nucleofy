import { collection, addDoc, getDocs, query, where, doc, updateDoc, getDoc } from "firebase/firestore";
import { UAParser } from "ua-parser-js";
import { printLog } from "./appUtils.js";

async function fetchIpAddress() {
    try {
        const response = await fetch("https://api.ipify.org?format=json"); // Use ipify API
        const data = await response.json();
        return data.ip; // Extract IP address
    } catch (error) {
        console.error("Failed to fetch IP address:", error);
        return null;
    }
}

function getUserDeviceAndBrowser() {
    const parser = new UAParser();
    const result = parser.getResult();

    const userInfo = {
        device: {
            type: result.device.type || "Desktop", // Fallback to Desktop if type is undefined
            vendor: result.device.vendor || "Unknown",
            model: result.device.model || "Unknown"
        },
        browser: {
            name: result.browser.name || "Unknown",
            version: result.browser.version || "Unknown"
        },
        os: {
            name: result.os.name || "Unknown",
            version: result.os.version || "Unknown"
        },
        engine: {
            name: result.engine.name || "Unknown",
            version: result.engine.version || "Unknown"
        }
    };

    return userInfo; // Convert to a pretty-printed JSON string
}

async function fetchIpData(apiKey) {
    const ip = await fetchIpAddress();
    const url = `https://api.ipdata.co/v1/${ip}/?api-key=${apiKey}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        printLog("Data is", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch IP data:", error);
        throw error;
    }
}

function getClientCookies() {
    const cookies = document.cookie; // Retrieve all cookies as a single string
    const cookieObject = {};

    if (cookies) {
        cookies.split(";").forEach(cookie => {
            const [key, value] = cookie.split("=").map(part => part.trim());
            cookieObject[key] = decodeURIComponent(value); // Decode the cookie value
        });
    }
    return cookieObject; // Return cookies as an object
}

async function fetchAndStoreAppSwitches(db) {
    const docRef = doc(db, "appswitches", "01"); // Collection "appswitches", Document ID "01"
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            // Store data in session storage
            sessionStorage.setItem("appSwitches", JSON.stringify(data));
            printLog("Data stored in session storage:", data);
        } else {
            console.error("No such document exists!");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    }
}



async function validateAndPushClientData(db, apiData) {
    try {
        printLog("API DATA", apiData);
        const cookies = getClientCookies();
        const ua = getUserDeviceAndBrowser();
        printLog("UA is", ua);

        const date = new Date().getDate();
        const time = new Date().getTime();

        const ip = apiData.ip;

        // Validate IP address
        if (!ip) {
            throw new Error("Invalid IP address");
        }

        // Check for required fields
        const requiredFields = ["ip", "city", "country_name", "latitude", "longitude"];
        for (const field of requiredFields) {
            if (!apiData[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        // Check if IP address already exists in Firestore
        const ipDataCollection = collection(db, "ip_data");
        const q = query(ipDataCollection, where("ip", "==", ip));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Update visit count if the IP address already exists
            const docId = querySnapshot.docs[0].id;
            const existingData = querySnapshot.docs[0].data();
            const updatedVisitCount = (existingData.visitCount || 0) + 1;

            await updateDoc(doc(db, "ip_data", docId), { visitCount: updatedVisitCount, cookies: cookies, ua, date: date, time: time });
            printLog(`IP address ${ip} visit count updated to ${updatedVisitCount}.`);
        } else {
            // Add new entry if IP address doesn't exist
            apiData.visitCount = 1; // Initialize visit count
            await addDoc(ipDataCollection, { apiData, cookies, ua, date: date, time: time });
            printLog(`IP address ${ip} successfully added to Firestore.`);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

export {
    fetchIpAddress,
    fetchIpData,
    validateAndPushClientData,
    fetchAndStoreAppSwitches
};
