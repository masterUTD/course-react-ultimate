import ShopActionTypes from './shop.types';

const INITIAL_STATE  = {
   collections:  null,
   isFetching: false,
   errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true // it is true because start fetching data 
            };

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state, // me retorna lo que este en el state
                isFetching: false, // it is false because already fetched the data successfully so it is not fetching anymore
                collections: action.payload
            };
            case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
                return {
                    ...state,
                    isFetching: false, 
                    errorMessage: action.payload
                };
        default: 
        return state

    }

};

export default shopReducer;
 