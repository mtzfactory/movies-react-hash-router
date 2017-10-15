import React, { Component } from 'react';

import '../css/Landing.css'

class Landing extends Component {

    render() {
        return (
            <section className="landing">
                <div className="wellcome">
                    <img src="./img/film-icon.png" alt="Movies Collection"/>
                    <h1>Welcome to<br/><span>Movies</span> Collection</h1>
                    <br/>
                </div>
            </section>
        )
    }
}

export default Landing