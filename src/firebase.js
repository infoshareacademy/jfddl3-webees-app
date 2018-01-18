import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDYCQAgJpq1ujMczXgFewm-EGo-x7oWK3k",
    authDomain: "isa-webees.firebaseapp.com",
    databaseURL: "https://isa-webees.firebaseio.com",
    projectId: "isa-webees",
    storageBucket: "isa-webees.appspot.com",
    messagingSenderId: "807574041673"
};
firebase.initializeApp(config);

export const database = firebase.database()
