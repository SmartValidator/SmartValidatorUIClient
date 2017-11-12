import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import T from 'i18n-react';

T.setTexts(require('./i18n/en.json'));

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
