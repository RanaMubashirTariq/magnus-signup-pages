import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0rLGahH8uXFHHfLhnAGqJAIjZkPR8CJc",
  authDomain: "signup-pages-bb0fc.firebaseapp.com",
  projectId: "signup-pages-bb0fc",
  storageBucket: "signup-pages-bb0fc.firebasestorage.app",
  messagingSenderId: "604494053024",
  appId: "1:604494053024:web:c2a1080d949e06c22153c5",
  databaseURL:  "https://signup-pages-bb0fc-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app)

export {app , database , auth };