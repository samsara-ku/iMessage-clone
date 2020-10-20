import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCKX63CUozwXPITBCPsMQTA63eA7sNy71E',
  authDomain: 'imessage-clone-584f6.firebaseapp.com',
  databaseURL: 'https://imessage-clone-584f6.firebaseio.com',
  projectId: 'imessage-clone-584f6',
  storageBucket: 'imessage-clone-584f6.appspot.com',
  messagingSenderId: '784243536820',
  appId: '1:784243536820:web:112b9fd98578135a1ab8e1',
  measurementId: 'G-XBB3FJ3NVJ',
}

const fierbaseApp = firebase.initializeApp(firebaseConfig)
const db = fierbaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
