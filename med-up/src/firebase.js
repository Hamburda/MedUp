import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.evn.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.evn.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.evn.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.evn.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.evn.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.evn.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.evn.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth()
export default app