import React, { Component } from 'react';

import moviesService from '../../services/MoviesService'
import Posters from '../Posters/Posters'

class NowPlaying extends Component {

    constructor() {
        super()

        this.state = {
            page: 0,
            results: [],
            total_pages: -1,
            total_results: -1
        }
    }

    componentDidMount() {
        this.loadNextPage()
    }

    loadNextPage = () => {
        moviesService.getNowPlaying(this.state.page+1)
            .then(movies => {
                this.setState(movies)
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return (
            <section className="now-playing">
                <Posters 
                    imageBaseUrl={ this.props.imageBaseUrl }
                    movies={ this.state.results }
                    onLoadNextPage={ this.loadNextPage }/>
            </section>
        )
    }
}

export default NowPlaying