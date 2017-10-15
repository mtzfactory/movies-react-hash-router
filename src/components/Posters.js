import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as constants from '../constants/Constants';

import '../css/Posters.css'

class Posters extends Component {

    handleMoreInfo(id) {
        this.props.history.push('/movie/' + id)
    }

    getBackground(imgPath) {
        return { backgroundImage: 'url(' + this.props.imageBaseUrl + constants.POSTER_W500 + imgPath +  ')' }
    }

    getStars(puntuation) {
        const stars = puntuation.toFixed() / 2;
        const decimal = stars - Math.floor(Math.abs(stars))
        const half = (decimal > 0 && stars < 5) ? '-and-half' : ''

        return 'overlay stars stars-' + Math.floor(stars) + half
    }

    render() {
        return (
            <div className="posters">
                <ul>
                    {
                    this.props.movies.map(movie => {
                        return (
                                <li className="poster" key={ movie.id }>
                                    <div className="img-wrapper" style={ this.getBackground(movie.poster_path) }></div>
                                    <div className={ this.getStars(movie.vote_average) }>
                                        <h1>{ movie.title }</h1>
                                        <p>{ movie.overview }</p>
                                        <button onClick={ () => { this.handleMoreInfo(movie.id) } } type="button" className="btn btn-primary">More info</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(Posters)

/*
<img className="img-responsive" 
                                        src={ this.props.imageBaseUrl + constants.W500 + movie.poster_path } 
                                        alt={ movie.title }
                                    />
*/