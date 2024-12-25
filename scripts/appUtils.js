function printLog(data) {
    const ss = getAppSwitchesFromSessionStorage();
    if (getAppSwitchesFromSessionStorage()) {
        if (ss.enable_logs === true) {
            console.log("LOG IS", data);
        }
    }
}

function getAppSwitchesFromSessionStorage() {
    try {
        // Retrieve data from session storage
        const appSwitches = sessionStorage.getItem("appSwitches");

        // Check if data exists
        if (appSwitches) {
            // Parse the JSON string back into an object
            const parsedData = JSON.parse(appSwitches);
            return parsedData;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}


let startTime;
let totalTimeSpent = 0;


function calculateTimeSpent() {
    const endTime = Date.now();
    const timeSpent = endTime - startTime;
    totalTimeSpent += timeSpent;

    console.log(`Time spent this session: ${timeSpent / 1000} seconds`);
    console.log(`Total time spent on website: ${totalTimeSpent / 1000} seconds`);


    sessionStorage.setItem("totalBrowsingTime", totalTimeSpent);
}


function setNavBarTitle() {
    let ss = getAppSwitchesFromSessionStorage();
    if(ss && ss.navbar_title) {
        document.getElementById("navbar_title").innerText = ss.navbar_title;
    }else {
        document.getElementById("navbar_title").innerText = "Ashuto.sh";
    }
}


window.addEventListener("load", () => {
    startTime = Date.now();


    const storedTime = sessionStorage.getItem("totalBrowsingTime");
    if (storedTime) {
        totalTimeSpent = parseInt(storedTime, 10);
    }
});


window.addEventListener("beforeunload", () => {
    calculateTimeSpent();
});



export { printLog, setNavBarTitle };