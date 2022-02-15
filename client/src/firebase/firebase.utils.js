import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/firestore';

const config = {

    apiKey: "AIzaSyCQwYI0v8VGLWF_2WjCaJC_MD3YMDnpj7k",
    authDomain: "crwn-db-39395.firebaseapp.com",
    projectId: "crwn-db-39395",
    storageBucket: "crwn-db-39395.appspot.com",
    messagingSenderId: "585114013410",
    appId: "1:585114013410:web:4319463e3f3dec4faa18bb",
    measurementId: "G-GWQDWE5RQP"

  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; // if there's no userAuth just finish the code

    const userRef = firestore.doc(`users/${userAuth.uid}`);  // the user id

    const snapShot = await  userRef.get() // this just gives us a snapshot  of the user I think

    if(!snapShot.exists) { // los snapshots are almost similar to the userRef , aqui estamos verificando si existe en la firestore
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({ // only with the userRef we can set a user 
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      } catch(error) {
        console.log('error at creating user', error.message);

      }

    }

    return userRef;// si existe o si lo encontro en la firestore creo


  };

  // this code is just to use or run one time 
  export const addCollectionAndDocuments = async (collectionKey /* collection name*/, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey) // creating the collection using the colection key
    
    const batch = firestore.batch()// batch tell me if at least one item did not get saved so it failed the entire operation  
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(); // firebase gives me a new  reference objects in this collection and randomly generate an id for me a cada objecto en especifico por ejemplo uno para hats y otro para  sneakers

      batch.set(newDocRef, obj); // aqui nos guarda  ,,, batch is like collectionRef.set para guardar en la base de datos

    });

    return await batch.commit() // to execute the batch



  };

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };


export const getCurrentUser  = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe(); // me desuscribo creo,, onAuthStateChange gives me a function to unsubscribe from the observer  i think
      resolve(userAuth) // me resuelve si hay un userAuth o si no hay me resuelve con un null from firebase

    }, reject)

  })

}
 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();



  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' }); 
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase; // in case we use the whole library in another place in our app