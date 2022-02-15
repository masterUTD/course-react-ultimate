import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';

import CartItem  from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom'

import { toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch}) => ( // history come from withRouter as a prop
<div className = 'cart-dropdown'>

    <div className = 'cart-items'>
        {
        cartItems.length ?

            cartItems.map(
                cartItem =>  <CartItem key ={cartItem.id} item = {cartItem} /> 
                
                )
               
         : <span className = 'empty-message'> Your cart is empty</span>

        }

    </div>

    <CustomButton onClick = {() => { // i write another {} to write multiline code
        
        history.push('/checkout');
        dispatch(toggleCartHidden()) // to hide the cartDropdown // turning to the opposite value if true to false and if it is false to true

        }}> 
        GO TO CHECKOUT
    </CustomButton>

</div>


);

const mapStateToProps = createStructuredSelector ({ // destructuring: const mapStateToProps = ({ cart: { cartItems }}) => ({ cartItems}) 
    cartItems : selectCartItems,
 

})

//  const mapStateToProps = (state) => ({
//     cartItems :  state.cartItems // creo

//  });
   

export default withRouter(connect(mapStateToProps)(CartDropdown)); 
// si nosotros no lo pasamos manualmente ,connect automaticamente pasa el dispatch  por nootros como una prop llamada dispatch