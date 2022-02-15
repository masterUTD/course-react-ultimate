import React, { useEffect } from 'react'; // react hooks
import './App.css';

import {Switch,  Route, Redirect } from 'react-router-dom'; // switch determine if the path matches and only show or render one
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'



import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { checkUserSessions } from './redux/user/user.actions'



const App  = ({ checkUserSessions, currentUser }) => {
  useEffect(() => {
    checkUserSessions()

  }, [checkUserSessions])

    return (
      <div >
        <Header />
        
        <Switch> 
        <Route exact path = '/' component= {HomePage}/>
        <Route  path = '/shop' component= {ShopPage}/>
        <Route exact path = '/checkout' component= {CheckoutPage}/>
        <Route exact path = '/signin' render = { () => currentUser ? (<Redirect to= '/' /> ) : (<SignInAndSignUpPage/>) } />
        </Switch>
        
      </div>
    ); // todo lo que este fuera de switch se muestra automaticamente en toda mi applicacion




};

// also const mapStateToProps = (state) => ({
const mapStateToProps = createStructuredSelector({ // we need the currentUser of our redux state ,, we are gonna destructure our user reducer
  currentUser:  selectCurrentUser, // also currentUser : state.user.currentUser  .. past
  

});

const mapDispatchToProps = (dispatch) => ({
  checkUserSessions: () => dispatch(checkUserSessions())

})



export default connect(mapStateToProps, mapDispatchToProps)(App); // null because App does not need currentUser anymore i think
// ahora si pongo mapStateToProps por que app necesita el estado de user , si si no lo necesitara pongo null

//connect para conectar redux con mi react app
//export default connect(mapStateToProps, mapDispatchToProps )(App);
// el primer parametro es si el componente necesita algun estado de redux y el segundo es para disparar las acciones
// por lo que App necesita el estado de user se lo paso como primer parametro  para poder redireccionar a home