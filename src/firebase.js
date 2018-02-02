import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDYCQAgJpq1ujMczXgFewm-EGo-x7oWK3k",
    authDomain: "isa-webees.firebaseapp.com",
    databaseURL: "https://isa-webees.firebaseio.com",
    projectId: "isa-webees",
    storageBucket: "isa-webees.appspot.com",
    messagingSenderId: "807574041673"
}


firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database()
export const auth = firebase.auth()