import React, { Component } from 'react';

import '../css/Navigation.css'

import { NavLink, Link, withRouter } from 'react-router-dom'

class Navigation extends Component {

    handleOnKeyPress = (event) =>  {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            this.props.history.push('/search/' + encodeURI(event.target.value))
        }
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top mtz-navbar-no-bottom-margin">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mtz-navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand"> Movies Collection</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="mtz-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/popular" activeClassName="active">Popular movies</NavLink></li>
                            <li><NavLink to="/upcoming" activeClassName="active">Upcoming Movies</NavLink></li>
                            <li><NavLink to="/nowplaying" activeClassName="active">Now Playing Movies</NavLink></li>
                            <li><NavLink to="/toprated" activeClassName="active">Top Rated Movies</NavLink></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input onKeyPress={ this.handleOnKeyPress } type="text" className="form-control" placeholder="tell me a movie"/>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navigation)