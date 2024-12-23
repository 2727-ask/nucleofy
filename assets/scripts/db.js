import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBbRRV_5Vi1pMDPruhdphlT22MsIhPzcvw",
    authDomain: "serviceme-4cfca.firebaseapp.com",
    projectId: "serviceme-4cfca",
    storageBucket: "serviceme-4cfca.firebasestorage.app",
    messagingSenderId: "80880909332",
    appId: "1:80880909332:web:d6ba7532ea3a82f8b83b01",
    measurementId: "G-MJ79M8Q0FR"
};

// Initialize Firebase

function getDb() {
    try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        console.log("DB is",collection);
        console.log("DB Connection Established");
        return db;
    } catch (error) {
        console.log("Error occured while connecting to the DB", error);
        return null;
    }
}






export { getDb, collection };