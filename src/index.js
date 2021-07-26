import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{BrowserRouter} from 'react-router-dom'
import memoryUtil from './utils/memoryUtil'
import storeUtil from './utils/storeUtil'


const{getUser} = storeUtil
const user = getUser()

memoryUtil.user = user



ReactDOM.render(
 <BrowserRouter>
  <App />
  </BrowserRouter>
   ,
  document.getElementById('root')
);

