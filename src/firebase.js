import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuBSyZaDPEa2dFS1djn-0mrj0nF-3NEFc",
    authDomain: "luke-moneybox-42223.firebaseapp.com",
    projectId: "luke-moneybox-42223",
    storageBucket: "luke-moneybox-42223.appspot.com",
    messagingSenderId: "103263825371",
    appId: "1:103263825371:web:0d9d1cf50cd3254a9a4bfe"
};

firebase.initializeApp(firebaseConfig);

export default firebase;