import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4OrZERUoxWPiShCEWVvz1MK9cYGO3_K8",
  authDomain: "new-record-3ccd6.firebaseapp.com",
  projectId: "new-record-3ccd6",
  storageBucket: "new-record-3ccd6.appspot.com",
  messagingSenderId: "1065863160189",
  appId: "1:1065863160189:web:25313e55b0733f5e126c14",
  measurementId: "G-JW6N2HYR58"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
