import { createStore , applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer  from './root-reducer';
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware();

const  middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') { // just to show me the redux logs in development
    middlewares.push(logger);

};

 export const store = createStore(rootReducer, applyMiddleware( ...middlewares)); // applyMiddleware para que me aplique algunos middlewares

sagaMiddleware.run( rootSaga)

 export const persistor = persistStore(store); // the persistor store  the version of the store but with persistor

 //store and persistor are imported in the index.js

 //export default { store, persistStore}


