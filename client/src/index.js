import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
import { Provider } from "react-redux"; // the provider is a component that we get from react redux
import { PersistGate } from 'redux-persist/integration/react' //para poder integrar persistor creo
import { store, persistor} from './redux/store';


ReactDOM.render( // i wrap the app into browserRouter for my app use the functionality of routing
<Provider store = {store}> 
    <BrowserRouter> 
    <PersistGate persistor = { persistor }>
      <App />
    </PersistGate>
    </BrowserRouter>
   

</Provider>,

document.getElementById('root')

);
 
// the Provider component is the parent of the whole application
//this is why i wrap the provider component as a parent to get all the redux properties or benefits
    
  
  

