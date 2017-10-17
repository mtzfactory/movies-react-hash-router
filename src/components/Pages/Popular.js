import React, { Component } from 'react'

import moviesService from '../../services/MoviesService'
import Posters from '../Posters/Posters'

class Popular extends Component {

    constructor() {
        super()

        this.state = {
            page: -1,
            results: [],
            total_pages: -1,
            total_results: -1
        }
    }

    componentDidMount() {
        moviesService.getPopular()
            .then(movies => {
                this.setState(movies)
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return (
            <section className="popular">
                <Posters 
                    imageBaseUrl={ this.props.imageBaseUrl }
                    movies={ this.state.results }/>
            </section>
        )
    }
}

export default Popular