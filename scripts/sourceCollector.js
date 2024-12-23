import { collection, addDoc, getDocs, query, where, doc, updateDoc } from "firebase/firestore";

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
        console.log("Data is", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch IP data:", error);
        throw error;
    }
}

async function validateAndPushClientData(db, apiData) {
    try {
        console.log("API DATA", apiData);

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

            await updateDoc(doc(db, "ip_data", docId), { visitCount: updatedVisitCount });
            console.log(`IP address ${ip} visit count updated to ${updatedVisitCount}.`);
        } else {
            // Add new entry if IP address doesn't exist
            apiData.visitCount = 1; // Initialize visit count
            await addDoc(ipDataCollection, apiData);
            console.log(`IP address ${ip} successfully added to Firestore.`);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

export {
    fetchIpAddress,
    fetchIpData,
    validateAndPushClientData
};
