import { combineReducers } from 'redux'; // to combine all the reducers together
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // the localStorage from the browser

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // cart is the reducer we want to persist
};// the spinner was not rendering in shop/:collectionId because i was writing the whitelist as whiteList in capital L


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer ); 

















// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer,
//     directory: directoryReducer
    
// });






