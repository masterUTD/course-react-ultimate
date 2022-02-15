import UserActionTypes from './user.types';

const INITIAL_STATE = { // solo  para iniciar el estado en null
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {// aqui me llama a todas las acciones de los reducer so i have to specify which type of action it is gonna run 
        
        case UserActionTypes.SIGN_IN_SUCCESS : 
        
            return {
                ...state,
                currentUser : action.payload,
                error: null //if we get an error and we try to re-signIn again  , we want to set error to null again
            }

            case UserActionTypes.SIGN_OUT_SUCCESS:
               return {
                    ...state,
                    currentUser: null,
                    error: null  
               } 

            case UserActionTypes.SIGN_IN_FAILURE:
            case UserActionTypes.SIGN_OUT_FAILURE:
            case UserActionTypes.SIGN_UP_FAILURE:         
            return {
                ...state,
                error: action.payload
            }

        default : return state; // we do not want to rerender anything,, it is just the initial state


    }

};

export default userReducer;