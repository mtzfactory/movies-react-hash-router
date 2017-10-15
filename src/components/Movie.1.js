import React, { Component } from 'react'

import * as constants from '../constants/Constants';
import moviesService from '../services/MoviesService'

import '../css/Movie.css'

class Movie extends Component {
    constructor() {
        super()

        this.state = {
            movie: {}
        }
    }

    getMovie(movieId) {
        moviesService.getMovieById(movieId)
            .then(movie => {
                this.setState({movie})
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    componentDidMount() {
        console.log('component did mount')//, this.props)
        this.getMovie(this.props.match.params.id)
    }

    componentWillReceiveProps(props) {
        console.log('component will receive props')//, this.props)
        this.getMovie(this.props.match.params.id)
    }

    getBackground() {
        return { backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(' + this.props.imageBaseUrl + constants.BACKDROP_W1280 + this.state.movie.backdrop_path +  ')' }
    }

    getStars() {
        const stars = this.state.movie.vote_average.toFixed() / 2;
        const decimal = stars - Math.floor(Math.abs(stars))
        const half = (decimal > 0 && stars < 5) ? '-and-half' : ''

        return 'container stars stars-' + Math.floor(stars) + half
    }

    render() {
        const { movie } = this.state

        return (
            <section className="backdrop" style={ movie.id && this.getBackground() }>
                <div className={ movie.vote_average && this.getStars() }>
                    <h1>{ movie.title }<small>{ movie.tagline }</small></h1>
                    <br/>
                    <div className="container">
                        <p className="overview">{ movie.overview }</p>
                        <br/>
                        <p>Production companies:</p>
                        <ul>
                        {
                            movie.production_companies && movie.production_companies.map(function(prod) {
                                return <li key={ prod.id }>{ prod.name }.</li>
                            })
                        }
                        </ul>
                        <br/>
                        <p>Production countries:</p>
                        <ul>
                        {
                            movie.production_countries && movie.production_countries.map(function(prod, index) {
                                return <li key={ index }>{ prod.name }.</li>
                            })
                        }
                        </ul>
                        <br/>
                        <p>Budget: { parseInt(movie.budget, 10).formatMoney() }</p>
                        <p>Revenue: { parseInt(movie.revenue, 10).formatMoney() }</p>
                        <br/>
                        <p>Genres:</p>
                        <ul>
                        {
                            movie.genres && movie.genres.map(function(genre) {
                                return <li key={ genre.id }>{ genre.name }.</li>
                            })
                        }
                        </ul>
                        <br/>
                        <p>Duration: { movie.runtime } min.</p>
                        <br/>
                        <p>Release date: {movie.release_date} <span className="pull-right">Puntuation: {movie.vote_average}</span></p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Movie