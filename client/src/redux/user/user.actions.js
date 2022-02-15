import  UserActionTypes  from './user.types'


export const googleSignInStart = () => ({ // this is the action that is gonna hit the userSaga
    type: UserActionTypes.GOOGLE_SIGN_IN_START

});

export const signInSuccess = ( user ) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user

});

export const signInFailure = ( error ) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});


export const emailSignInStart = (emailAndPassword) => ({ // this is the action that is gonna hit the userSaga
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword

});

export const checkUserSessions = ( ) => ({ // this is the action that is gonna hit the userSaga
    type: UserActionTypes.CHECK_USER_SESSION
})


export const signOutStart = () => ({ // this is the action that is gonna hit the userSaga
    type: UserActionTypes.SIGN_OUT_START

})

export const signOutSuccess = () => ({  // how this action doesn't have any saga listening for this, this goes directly to the user.reducer to make the changes
    type: UserActionTypes.SIGN_OUT_SUCCESS

})

export const signOutFailure = (error) => ({ 
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (userCredentials) => ({ // de aqui se va a userSagas quien esta escuchando con este tipo UserActionTypes.SIGN_UP_START,
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials

});

export const signUpSuccess = ({user, additionalData}) => ({ // aqui estamos obteniendo los que nos envio signUp de user.sagas
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData}

}); // y de aqui lo enviamos aqui este escuchando con este tipo SIGN_UP_SUCCESS en user.sagas

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})