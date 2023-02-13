import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9FY0c7gwjmbiv4BsLlLqgtIimjLwI9pU",
  authDomain: "asrafs-chatgpt-messenger.firebaseapp.com",
  projectId: "asrafs-chatgpt-messenger",
  storageBucket: "asrafs-chatgpt-messenger.appspot.com",
  messagingSenderId: "584180999556",
  appId: "1:584180999556:web:371381abe8a4426adfe9d1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }