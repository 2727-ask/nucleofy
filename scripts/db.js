import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { printLog } from './appUtils.js';



const firebaseConfig = {
    apiKey: "AIzaSyAl9UZlCY2Id4ref0B80nhs1ed0O_KulGU",
    authDomain: "nucleofy.firebaseapp.com",
    projectId: "nucleofy",
    storageBucket: "nucleofy.firebasestorage.app",
    messagingSenderId: "42566832572",
    appId: "1:42566832572:web:7594aaed7ce69a62679bb9",
    measurementId: "G-KSRYF2EW88"
  };
// Initialize Firebase

function getDb() {
    try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        printLog("DB Connection Established");
        return db;
    } catch (error) {
        printLog("Error occured while connecting to the DB", error);
        return null;
    }
}


export { getDb };