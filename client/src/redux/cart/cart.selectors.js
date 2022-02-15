import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(

    [selectCart], // y este referencia a selectCart que esta arriba 

    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],

    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], // este array  referencia a selectCartItems que esta arriba 

    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) =>  accumulatedQuantity + cartItem.quantity, 0 ) // accumulatedQuantity = 0 al inicio despues le vamos asignando valor uno a uno
);

export const cartSelectTotal = createSelector(
    [selectCartItems],

    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>  accumulatedQuantity + cartItem.quantity * cartItem.price, 0 ) 

)



