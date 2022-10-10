// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV9txlEFh6Jk7QzCcNml-AhkYpgg5qHRo",
  authDomain: "react-jahnel.firebaseapp.com",
  projectId: "react-jahnel",
  storageBucket: "react-jahnel.appspot.com",
  messagingSenderId: "843731772225",
  appId: "1:843731772225:web:ce1d1022ce666a5bf977c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// db = database

//promise - Lo que hace es:
export const firestoreFetch = async (category) => {
  let q;
  if (category) {
    q = query(collection(db, "productos"), where("categoryId", "==", category)); //Traer docs where categoryId es == a category
  } else {
    q = query(collection(db, "productos")); //Traer todos los docs
  }
  const querySnapshot = await getDocs(q); //Consulta los datos que se les asigno a la variable "q" anteriormente
  const dataFromFS = querySnapshot.docs.map((doc) => ({
    //Conversion a array de objetos y le introducimos el id ya que por default esta por fuera del objeto.
    id: doc.id,
    ...doc.data(),
  }));
  return dataFromFS;
};

export const singleFetch = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let singleData = docSnap.data()
    singleData.id = docSnap.id
    return singleData
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
