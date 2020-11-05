import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyDVRWe4nv_geqfZNxw20cx5QCvLynda-_0",
    authDomain: "juice-bar-e0374.firebaseapp.com",
    databaseURL: "https://juice-bar-e0374.firebaseio.com",
    projectId: "juice-bar-e0374",
    storageBucket: "juice-bar-e0374.appspot.com",
    messagingSenderId: "825629818566",
    appId: "1:825629818566:web:28f0a56fcff0d596ca21c7"
  };

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
// const auth = firebase.auth()
// const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
const AllJuices = db.collection('AllJuices')
const DashboardJuices = db.collection('DashboardJuices')

export {
    db,
    auth,
    // currentUser,
    // usersCollection,
    // postsCollection,
    // commentsCollection,
    AllJuices,
    DashboardJuices
}