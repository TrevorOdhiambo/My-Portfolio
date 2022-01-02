import firebase, {initializeApp} from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhX0vl7lG_9o2LBmWgeBIZQ2fTKRVgCQY",
  authDomain: "portfolio-contant-form.firebaseapp.com",
  projectId: "portfolio-contant-form",
  storageBucket: "portfolio-contant-form.appspot.com",
  messagingSenderId: "180863909680",
  appId: "1:180863909680:web:7a25040a998a7be2fe52f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

export { db }