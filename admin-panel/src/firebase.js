import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyACKsxXfM4mZ9psqJ7r6qi3BDn92QHesCA",
    authDomain: "netflix-aeaa5.firebaseapp.com",
    projectId: "netflix-aeaa5",
    storageBucket: "netflix-aeaa5.appspot.com",
    messagingSenderId: "1094963391912",
    appId: "1:1094963391912:web:d72a6bb20114116574819d"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage