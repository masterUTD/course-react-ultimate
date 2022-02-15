import { all, call} from 'redux-saga/effects'; 
//all : just to group all our sagas and call our sagas concurrently , it means all sagas runs by their own way , not waiting to the first saga to finish so then the second one can starts,
// initialize them all on separate task streams, not waiting for each other to finish
// call: just execute or call functions


import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas';
import { shopSagas } from './shop/shop.sagas'


export default function* rootSaga() {

    yield all([
        call(shopSagas),
        call( userSagas ),
        call( cartSagas )
    
    ])
}