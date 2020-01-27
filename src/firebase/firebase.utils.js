import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3SN7as3gWsAmcBus08ujL9EgbK4wCRCY",
    authDomain: "crwn-clothing-387d6.firebaseapp.com",
    databaseURL: "https://crwn-clothing-387d6.firebaseio.com",
    projectId: "crwn-clothing-387d6",
    storageBucket: "crwn-clothing-387d6.appspot.com",
    messagingSenderId: "766662903592",
    appId: "1:766662903592:web:159d910704be1627c5b21d",
    measurementId: "G-M3HQEL2Q96"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;