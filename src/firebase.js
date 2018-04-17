import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAek37mnHx5LOo0pPMukxsTg5XyE2DvbdQ",
	authDomain: "afya-bars.firebaseapp.com",
	databaseURL: "https://afya-bars.firebaseio.com",
	projectId: "afya-bars",
	storageBucket: "",
	messagingSenderId: "492095818493"
};

export const firebaseApp = firebase.initializeApp(config);