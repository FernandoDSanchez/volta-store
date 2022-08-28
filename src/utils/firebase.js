// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore/lite';
import "firebase/firestore"
import { getFunctions, httpsCallable } from "firebase/functions";



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
      this.functions = getFunctions(this.app);
  }
  getItemByID= async(id) => {
    const productCol = collection(this.db, 'products');
    const ref = doc(productCol, id)
    const productSnapshot = await getDoc(ref);
    return productSnapshot.data();
  }
  getProducts = async () => {
    const productCol = collection(this.db, 'products');
    const productSnapshot = await getDocs(productCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;}

  addOrder = async (order, paymentDetails) => {
    const arrayCart = order.map(cart => cart[0])
    console.log(arrayCart);
    const newProductRef = doc(collection(this.db, "arrayCart"));
    const product = {arrayCart, _id: newProductRef.id, customer: paymentDetails.data};
    await setDoc(newProductRef, product)
    .then((res) => {
      console.log("Document successfully written!");
    })}

  createToken = async (data) => {
    const createToken= httpsCallable(this.functions, 'createToken');
    return await createToken(data)
    .then((result) => {
      return result;
    });
  }

  createCustomer = async (data) => {
    const createCustomer = httpsCallable(this.functions, 'createCustomer');
    return await createCustomer(data)
    .then((result) => {
      return result;
    });
  }

  createCharge = async (data) => {
  const createCharge= httpsCallable(this.functions, 'createCharge');
  return await createCharge(data)
  .then((result) => {
    console.log(result);
    return result;
  });}

  getTypeDocuments = async () => {
    const get= httpsCallable(this.functions, 'getTypeDocuments');
    return await get()
    .then((result) => {
      console.log(result);
      return result;
    });}
}
