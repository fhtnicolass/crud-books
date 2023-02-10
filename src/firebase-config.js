import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMzQqxYWDRfFlmfxekxYxuGeos6M8LA4U",
  authDomain: "pycine-c638c.firebaseapp.com",
  databaseURL: "https://pycine-c638c-default-rtdb.firebaseio.com",
  projectId: "pycine-c638c",
  storageBucket: "pycine-c638c.appspot.com",
  messagingSenderId: "123387623156",
  appId: "1:123387623156:web:ee8f278d2d4cdf3c82d0a1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
