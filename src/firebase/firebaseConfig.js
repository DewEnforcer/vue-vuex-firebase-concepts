import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_yrjhppzY4UoTr5nmglpDKlYpvVeGJNA",
    authDomain: "vue-vuex4-firebase-project.firebaseapp.com",
    projectId: "vue-vuex4-firebase-project",
    storageBucket: "vue-vuex4-firebase-project.appspot.com",
    messagingSenderId: "540557309634",
    appId: "1:540557309634:web:90e9a9d579d51b9d70ed5b"
};

initializeApp(firebaseConfig);

const auth = getAuth()

export {auth};