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
        console.error('Failed to fetch IP data:', error);
        throw error;
    }
}

async function validateAndPushClientData(db, collection, apiData) {    
    try {
        console.log("API DATA", apiData);
        
        const ip = apiData.ip;
        const cookies = document.cookie;

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

        // Check if the IP address is unique
        console.log("DB in client is", db);
        
        const existingDoc = await collection(db, "ip_data").where("ip", "==", ip).get();
        if (!existingDoc.empty) {
            console.log(`IP address ${ip} already exists in the database.`);
            return;
        }

        // Push to Firestore
        await collection(db, "ip_data").add(apiData);
        console.log(`IP address ${ip} successfully added to Firestore.`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}


export {
    fetchIpAddress,
    fetchIpData,
    validateAndPushClientData
}

