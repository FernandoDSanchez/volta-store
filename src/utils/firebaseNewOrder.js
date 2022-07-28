// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuh7roMPFelXD98D8WrnH8pk_QR62qSk8",
    authDomain: "voltabackend-bc22d.firebaseapp.com",
    projectId: "voltabackend-bc22d",
    storageBucket: "voltabackend-bc22d.appspot.com",
    messagingSenderId: "816948995629",
    appId: "1:816948995629:web:cb07e1293f27b17dbd7aa4",
    measurementId: "G-Y5KJ2F5NBG"
};

export class firebaseMethods {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }
    getProducts() {
        const productCol = collection(this.db, 'products');
        return getDocs(productCol);
    }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
    const productCol = collection(db, 'products');
    const productSnapshot = await getDocs(productCol);
    const cityList = productSnapshot.docs.map(doc => doc.data());
    return cityList;
}