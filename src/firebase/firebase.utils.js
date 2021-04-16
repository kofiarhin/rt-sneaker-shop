import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


const config = {
    apiKey: "AIzaSyAFr1Rlf7r2cNm9ZOEBISOZpkZkHZ_Wcpw",
    authDomain: "escokicks-e0dba.firebaseapp.com",
    projectId: "escokicks-e0dba",
    storageBucket: "escokicks-e0dba.appspot.com",
    messagingSenderId: "279474583508",
    appId: "1:279474583508:web:8d073ed28859a13fcb0841",
    measurementId: "G-86VLX5JSBP"
  }

  firebase.initializeApp(config)

  const auth = firebase.auth()
  const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: "select_account"})

  const signInWithGoogle = ()=> auth.signInWithPopup(provider)
  export  {
      firebase,
      auth,
      firestore,
      signInWithGoogle
  }


  export const createUserProfile = async (userAuth, additionalData) => {

      if(!userAuth) return

      const userRef =  firestore.doc(`users/${userAuth.uid}`)

      const snapshot = await userRef.get();

      if(!snapshot.exist) {

        const { displayName, email }  = userAuth
        try {
              await userRef.set({
                    displayName,
                    email
              })
        }catch(error) {


        }
      }

      return userRef;
  }