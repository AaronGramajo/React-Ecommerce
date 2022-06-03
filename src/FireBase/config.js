import {
    initializeApp
} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDkJOJtTQn079tYiREGjo3l6QxV3ARQXxY",
    authDomain: "ecommerce-react-coderhou-921ed.firebaseapp.com",
    projectId: "ecommerce-react-coderhou-921ed",
    storageBucket: "ecommerce-react-coderhou-921ed.appspot.com",
    messagingSenderId: "105040061697",
    appId: "1:105040061697:web:a4f70be18ae873fe46e700"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}