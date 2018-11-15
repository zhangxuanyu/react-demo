import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';



import registerServiceWorker from './registerServiceWorker';


import { Provider } from "mobx-react";
import counte from './compontent/Counter';
let store = {
    counte
}
// const { ...storesArray } = index;
// console.log(store)
ReactDOM.render(
    <Provider {...store}>
        <App/>
    </Provider>    
, document.getElementById('root'));

registerServiceWorker();
