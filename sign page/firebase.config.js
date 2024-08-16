import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { getFirestore,  doc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiyBH-rwNVm5t9QsgOn1iIgrS3gBobUGI",
    authDomain: "sign-page-dfca9.firebaseapp.com",
    projectId: "sign-page-dfca9",
    storageBucket: "sign-page-dfca9.appspot.com",
    messagingSenderId: "106262297535",
    appId: "1:106262297535:web:76e1d74343068d1d9e7f0a",
    measurementId: "G-1LD6FGZGDK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);    // Firestore
const auth = getAuth(app);       // Authentication

function addUser(){
// Example: Firestore - Adding a document
  db.collection("users").add({
    name: "John Doe",
    email: "johndoe@example.com"
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}


function deleteUser(){
  // Delete the user document
    deleteDoc(doc(db, "users", user.uid)).then(() => {
      console.log("User document deleted successfully from Firestore.");
    }).catch((error) => {
      console.error("Error deleting user document: ", error);
    });
}

function Signin(){
  signInWithEmailAndPassword(auth, "user@example.com", "user_password")
  .then((userCredential) => {
    // User signed in
    const user = userCredential.user;
  }).catch((error) => {
    console.error("Error deleting user document: ", error);
  });
}

let signupbutton = document.getElementById("signup");
signupbutton.addEventListener("click", signUpUser);
let email = document.getElementById("email");
let psw = document.getElementById("password");
 function signUpUser() {
  createUserWithEmailAndPassword(auth, email.value, psw.value)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
window.location.href="/index.html"
      // Create user document in Firestore
      const userDocRef = doc(db, "users", user.uid);
      setDoc(userDocRef, {
        uid: user.uid,
        name: name,
        email: email,
      }).then(() => {
        console.log("User document created successfully.");
      }).catch((error) => {
        console.error("Error creating user document: ", error);
      });

      console.log("User signed up successfully:", user);
    })
    .catch((error) => {
      console.error("Error during signup: ", error);
    });
}

function checkUser(){
  
// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is logged in:", user);
    // You can access user information here, e.g., user.uid, user.email, etc.
  } else {
    // No user is signed in
    console.log("No user is logged in.");
  }
});
}