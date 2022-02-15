import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []

};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN :

        return {
            ...state,
            hidden: !state.hidden // the exclamation mark convert the state to the opposite if it is hidden to show and if it is show to hidden

        }
        
        case CartActionTypes.ADD_ITEM : 

        return {
            ...state,
            cartItems :addItemToCart(state.cartItems, action.payload) // the action payload is the item we want to add

        }

        case CartActionTypes.REMOVE_ITEM: 

        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload )


        }

        case CartActionTypes.CLEAR_ITEM_FROM_CART: // para eliminarlo del cart dandole click en la X icon

        return {
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)


        };

        case CartActionTypes.CLEAR_CART :

        return {
            ...state,
            cartItems: []
        }

        default : return state;


    }
};

export default cartReducer;

