import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN

});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item // the payload is optional just in some cases, when is necessary

});

export const clearItemFromCart = item => ({ // the action that remove the item in the X icon
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item

});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item

})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART // como no hay mas sagas escuchando por este tipo , esto se va directamente al cart.reducer

})