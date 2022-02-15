import { createSelector } from 'reselect';


const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop],

    shop => shop.collections

);

export const selectCollectionsForPreview = createSelector(
  [selectCollections], 

  collections => collections ? Object.keys(collections).map(key  => collections[key]) : [] // map me retorna un nuevo array
); //si collections exist me retorna esto , sino me retorna un empty array.... primero obtengo las keys con Object.keys y luego las mapeo


export const selectCollection = collectionUrlParam =>  // le pasa esta propiedad a esta funcion
  createSelector( // esta es la segunda funcion
    [selectCollections],
    
    collections => (collections ? collections[collectionUrlParam] : null)
  );

  export const selectIsCollectionFetching = createSelector(
    [selectShop],

    shop => shop.isFetching

  );

  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],

    shop =>  !!shop.collections  
  );  // converting the collections to true or false 
  // if our collections is loaded will get true otherwise will get false

