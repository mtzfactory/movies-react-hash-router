import React, { Component } from 'react'

import moviesService from '../services/MoviesService'
import Posters from './Posters'

import '../css/Movie.css'

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
                <footer className="footer">
                    <a onClick={ this.handleOnPrev } className="pull-left"><i className="fa fa-angle-double-left" aria-hidden="true"></i> prev</a>
                    <p>hecho con&nbsp;&nbsp;<i className="fa fa-heart red" aria-hidden="true"></i>&nbsp;&nbsp;por <a href="mailto:ricardo.martinez.monje@gmail.com">Ricardo Martínez</a></p>
                    <a onClick={ this.handleOnNext } className="pull-right">next <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                </footer>
            </section>
        )
    }

}

export default Search