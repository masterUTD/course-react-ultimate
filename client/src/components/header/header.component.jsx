import React from 'react';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from  '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser} from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import  { HeaderContainer, LogoContainer, OptionsContainer, OptionLink  } from './header.styles.jsx'

const Header = ({currentUser, hidden, signOutStart}) => ( // destructuring my props that passed to this component
    <HeaderContainer>
        <LogoContainer to ='/' >
            <Logo  title = 'Crown logo' />
        </LogoContainer>

        <OptionsContainer >

            <OptionLink   to= '/shop'>SHOP</OptionLink>
            <OptionLink   to= '/shop'>CONTACT</OptionLink>

            {
                currentUser ? (
               <OptionLink as='div' onClick = {signOutStart}> SIGN OUT </OptionLink>

                 ) : (
                <OptionLink to= '/signin' className= 'option'> SIGN IN </OptionLink>

             )
             
             }

             <CartIcon/>
            
        </OptionsContainer>

        {
            hidden ? null : <CartDropdown/> // si hidden es true no me renderizo nada , de lo contrario me muestra el cartdropdown

        }

    </HeaderContainer>

);

const mapStateToProps = createStructuredSelector ({  // el estado se le pasa al parametro state y utilize el objeto user del rootReducer
    currentUser : selectCurrentUser, // the key currentUser es para actualizar los botones signin y signout
    hidden: selectCartHidden
});

// mapStateToProps en sus parametros estamos usando primero si el destructuring y despues con el destructuring


const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);