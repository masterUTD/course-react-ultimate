import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';


import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


const ShopPage  = ({ fetchCollectionsStart,  match   } ) =>  {   // this match comes from the Route  that is nesting our component in app.js, actually it passes the three objects like history location and match
    useEffect(() => {
        fetchCollectionsStart()

    }, [ fetchCollectionsStart ]) // aqui le digo que solo quiero escuchar cuando solo  fetchCollectionsStart cambie;
       
        return (
            <div className='shop-page'>
            <Route exact path = {`${match.path}`}
             component = { CollectionsOverviewContainer} />


            <Route path = {`${match.path}/:collectionId`}
            component = { CollectionPageContainer} />

        </div> // render takes a function where the parameters in the function are pretty much just the parameters that the component will receive 
                //  which in our case are going to be the match , history and location
        ); // props son los props que se pasan automaticamete de Route como match,history, location
      // the {...props } se las estamos pasando al compononte original =>  CollectionPage
    

};


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())   // aqui le pasamos el dispatch a la funcion creo fetchCollectionsStartAsync


});


export default connect(
    null,
     mapDispatchToProps
     )(ShopPage);
     






















// const mapStateToProps = (state) => ({
//     collections : state.shop

// });