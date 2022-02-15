import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { auth , googleProvider, createUserProfileDocument , getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess,
    signInFailure, 
     signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
  } from './user.actions'


export function* getSnapshotFromUserAuth (userAuth, additionalData) {
  try {
  const userRef = yield call(createUserProfileDocument, userAuth, additionalData);  // userAuth: first parameter, additionalData : second parameter
  const userSnapshot = yield userRef.get()   
  yield put ( signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  
} catch(error) {
yield put(signInFailure(error))

}

};






export function* signInWithGoogle() {
    try {
         const { user } = yield auth.signInWithPopup(googleProvider) // yield do the same like async await , between many others things too
           // signInPopUp has a object named user, so i am destructuring that object
         yield  getSnapshotFromUserAuth(user)
        
         
    } catch(error) {
       yield put(signInFailure(error))

    }

}; // we have the catch block also here because sigInWithPopup may also fail

export function* signInWithEmail({ payload: {email, password }}) { // destructuring the payload and destructuring what is inside of the payload : email and password
  try {
   const { user } = yield auth.signInWithEmailAndPassword(email, password) // signInWithEmailAndPassword also has (give) a object named user, so i am destructuring that object
   yield getSnapshotFromUserAuth(user)

  } catch(error) {

    yield put(signInFailure(error.message))

  }

}; // we have the catch block also here because signInWithEmailAndPassword may also fail

export function* signOut() {
  try {
    yield auth.signOut() 
    yield put(signOutSuccess()) // renderizamos signOutSuccess 'cause this yield auth.signOut() didn't catch any error


  } catch(error) {
    yield put(signOutFailure(error))

  }


}

export function* signUp({ payload: { email, password, displayName }}) {  // destructuring our payload (las credenciales)
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password) // the keyword user just gives me the email and the password
    yield put(signUpSuccess({user, additionalData: {displayName} })) // aqui la manda a las acciones  signUpSuccess user.actions

  }catch(error) {
    yield put(signUpFailure(error))

  }
  
};

export function* signInAfterSignUp({ payload: {user, additionalData}}) { // aui destructuramos lo que nos envio signUpSuccess de user.actions
  yield getSnapshotFromUserAuth(user, additionalData) // ejecutas esta funcion pasandole el user y el additionalData

}




export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)

};



export function* onEmailSignIn() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


export function* isUserAuthenticated () {
    try {
      const userAuth = yield getCurrentUser()
      //console.log(userAuth)
      if(!userAuth) return; // if no one is signed in
      yield getSnapshotFromUserAuth(userAuth)

    } catch(error) {
      yield put(signInFailure(error))

    }

}




export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)

}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)

};


export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)  // aqui lo estamos escuchando y disparamos la funcion (segundo parametro)

};

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp) 

}


export function* userSagas(){

   yield all([ 
      call(onGoogleSignInStart), 
      call(onEmailSignIn),
      call(onCheckUserSession),
      call(onSignOutStart),
      call(onSignUpStart),
      call(onSignUpSuccess)
    
    ])

}