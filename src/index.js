import React from 'react';
import ReactDOM from 'react-dom';

import './vendor/bootstrap/3.3.7/css/bootstrap.min.css'
import './vendor/bootstrap/3.3.7/css/bootstrap-theme.min.css'

import './vendor/font-awesome/4.7.0/css/font-awesome.min.css'

//import $ from './vendor/jquery/1.12.4/jquery.min';
//import './vendor/bootstrap/3.3.7/js/bootstrap.min';

//import $ from 'jquery'
//window.jQuery = window.$ = $
//import 'bootstrap/dist/js/bootstrap.min';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
