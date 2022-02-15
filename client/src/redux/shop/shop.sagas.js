import  { takeLatest, call, all , put  } from 'redux-saga/effects'; // takeEvery or takeLatest listen for every action of a specific type that we pass to it

import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'


//the generator functions have the asterisk sign

export function* fetchCollectionsAsync() { // this generator function takes over the another function = fetchCollectionsStart

try {

    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get(); // this gives me the snapshop in a promise form ( async await ) thanks to yield

     const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot )// call just invokes functions , in this case it invokes the function convertCollectionsSnapshotToMap with the parameter snapshot ,, the same    convertCollectionsSnapshotToMap(snapshot) 
    yield put(fetchCollectionsSuccess( collectionsMap ));
    
} catch(error) {
   yield put(fetchCollectionsFailure(error.message)) // sagas do not use dispatch keyword , instead it uses put to dispatch (to create actions)

}

}; // we yield call in case this call takes longer than we expect ,,
  // we're yielding this call it allows us again to defer control at this point of the execution back to the saga middleware
  // so i case it needs to cancel we give it another place where it's able to do so





export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync )// the second parameter is another generator function that will run in response of this takeEvery listener

}; // the momemnt takeEvery or takeLatest heard it the type of the action, the second parameter gets fired (function)
    // takeEvery is a non-blocking code ,, unlike of the take , take is a blocking code unless we use the while loop


    export function* shopSagas() {
        yield all( [ call(fetchCollectionsStart) ] )

    }