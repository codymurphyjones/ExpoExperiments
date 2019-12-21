import config from "../../config"

import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/storage"

firebase.initializeApp(config.firebaseConfig);
// Initialize Firebase
const storage = firebase.storage();
const firestore = firebase.firestore()

export {
	firebase,
	storage,
	firestore
}