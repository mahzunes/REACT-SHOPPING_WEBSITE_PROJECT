// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { userHandle } from "./utils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKF6w1yHfgL9aAyx4rH_Tfqig7n30Dx_U",
    authDomain: "tutorial-app-3c686.firebaseapp.com",
    projectId: "tutorial-app-3c686",
    storageBucket: "tutorial-app-3c686.appspot.com",
    messagingSenderId: "254134012031",
    appId: "1:254134012031:web:c5840160b90ad44e64d74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, user => {

    userHandle(user || false)

})




export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response.user)

    } catch (err) {
        alert(err.message)
    }
}


export const createUser = async (email, password) => {
    try {
        const responseUser = await createUserWithEmailAndPassword(auth, email, password)
        console.log(responseUser.user);
    } catch (err) {
        alert(err.message);
    }
}


export const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        alert(err.message);
    }
}









