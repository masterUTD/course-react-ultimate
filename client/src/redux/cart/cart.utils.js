export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); // es por que encontro un ya existente item en el array cartItems

    if(existingCartItem) {
        return cartItems.map(cartItem =>
             cartItem.id === cartItemToAdd.id

             ? { ...cartItem, quantity: cartItem.quantity + 1 } // retornamos un nuevo objecto con las modificaciones
             : cartItem // if does not match i return the object as it is
             
             )

        
    }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1}] 
    // if the cartItem is not found inside our array , the return a new array like this


};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

    }

    return cartItems.map(cartItem =>
         cartItem.id === cartItemToRemove.id
         ?{ ...cartItem, quantity: cartItem.quantity - 1}
         : cartItem
         
 );
}


// export const addItemToCart = (cartItems, cartItemToAdd) => {

//     const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
//     const nonExistingCartItem = cartItems.find(cartItem => cartItem.id !== cartItemToAdd.id);

    
        

//     if(existingCartItem) {
//     const nuevoArray = cartItems.map(cartItem => cartItem.id === cartItemToAdd.id)  

//     const index = nuevoArray.findIndex(cartItem2 => cartItem2 === cartItemToAdd);

//     nuevoArray.forEach( arrayItem => {
//         if(arrayItem === cartItemToAdd) {
//             return {...arrayItem, quantity: arrayItem.quantity}
//         }

//     })
       


//     } else if(nonExistingCartItem) {
//         const cartItemsw =  cartItems.map(cartItem => cartItem.id !== cartItemToAdd.id)
        
//         return cartItemsw
//     }

//     else {
//         return [...cartItems, {...cartItemToAdd, quantity: 1}] 

//     }
  
    
    
        
     
// }