import React, { Component } from 'react';
import './App.css';

import './functions/functions.js'

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
import { HashRouter } from 'react-router-dom'

import Navitation from './components/Navigation/Navigation'
import Movies from './components/Movies'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container-fluid mtz-no-side-padding">
                    <Navitation/>
                    <Movies/>
                </div>
            </HashRouter>
        )
    }
}

export default App;
