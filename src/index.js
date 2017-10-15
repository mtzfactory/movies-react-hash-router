import React from 'react';
import ReactDOM from 'react-dom';

//import './vendor/bootstrap/3.3.7/css/bootstrap.min.css'
//import './vendor/bootstrap/3.3.7/css/bootstrap-theme.min.css'

import './vendor/font-awesome/4.7.0/css/font-awesome.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
