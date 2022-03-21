import firebase from 'firebase/app';
import'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAMp9Qiiny8CFlVUbQKy5TVRHW4qJLo9Uk",
  authDomain: "udemy-vue-firebase-site-7a815.firebaseapp.com",
  projectId: "udemy-vue-firebase-site-7a815",
  storageBucket: "udemy-vue-firebase-site-7a815.appspot.com",
  messagingSenderId: "865701594414",
  appId: "1:865701594414:web:f4ab144bc33a31dc9ee6bf",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init firestore

const projectFirestore = firebase.firestore()