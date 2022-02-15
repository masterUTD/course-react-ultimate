import ShopActionTypes from './shop.types'

import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({ // this is a function that just return a object , that's because it is written like so
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});



export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,

});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
    
})



export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {             // whenever the collectionRef updates or whenever this code gets run for the first time , this collectionRef will send us the snapshot representing the code of our collections objects
           const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
           dispatch(fetchCollectionsSuccess(collectionsMap))
             
         }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
        
    };
     //  when using .get.then() : the only time we ever get new data from our backend is when we remount our shop 
        // watch the second video of asynchronous redux to wash my confussion clean

};