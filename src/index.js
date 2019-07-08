import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './styles/index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>

)


ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
