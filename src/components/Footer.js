import React, { Component } from 'react';

import moviesService from '../services/MoviesService'

import '../css/Footer.css'

class Footer extends Component {

    constructor() {

    }

    render() {
        return (
            <footer className="footer">
                <a onClick={ this.handleOnPrev } className="pull-left"><i className="fa fa-angle-double-left" aria-hidden="true"></i> prev</a>
                <p>hecho con&nbsp;&nbsp;<i className="fa fa-heart red" aria-hidden="true"></i>&nbsp;&nbsp;por <a href="mailto:ricardo.martinez.monje@gmail.com">Ricardo Martínez</a></p>
                <a onClick={ this.handleOnNext } className="pull-right">next <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
            </footer>
        )
    }
}

export default Footer

