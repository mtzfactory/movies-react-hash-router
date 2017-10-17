import React, { Component } from 'react'
//import '../css/Movie.css'

import moviesService from '../../services/MoviesService'
import Posters from '../Posters/Posters'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            page: -1,
            results: [],
            total_pages: -1,
            total_results: -1,
            query: ''
        }
    }

    searchMovie(query) {
        moviesService.searchMovies(query)
            .then(movies => {
                this.setState(movies)
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    shouldComponentUpdate(nextProps){
        return nextProps.query !== this.state.query
    };

    componentDidMount() {
        //console.log('component did mount', this.props)
        this.setState({ query: this.props.match.params.query})
        this.searchMovie(this.props.match.params.query)
    }

    componentWillReceiveProps(props) {
        //console.log('component will receive props', this.props)
        this.setState({ query: this.props.match.params.query})
        this.searchMovie(this.props.match.params.query)
    }

    render() {
        return (
            <section className="search">
                <Posters 
                    imageBaseUrl={ this.props.imageBaseUrl }
                    movies={ this.state.results }/>
            </section>
        )
    }

}

export default Search