import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const firebaseConfig = {
	apiKey: "AIzaSyBgGrJZIl0xG3r7HEuuDTWYH4MjD4hCJbk",
	authDomain: "teste-38d78.firebaseapp.com",
	databaseURL: "https://teste-38d78-default-rtdb.firebaseio.com",
	projectId: "teste-38d78",
	storageBucket: "teste-38d78.appspot.com",
	messagingSenderId: "827546428005",
	appId: "1:827546428005:web:f07b674a89da7a1f1d9c8c",
	measurementId: "G-7DL1YE7F30"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const notesRef = databaseRef.child("water-manage");
export const tank = databaseRef.child("tank");
export const reservoir = databaseRef.child("reservoir");
export const condominium = databaseRef.child("condominium");
export default firebase;
