import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import moviesSerice from '../services/MoviesService'

import Landing from './Landing'
import Popular from './Popular'
import Upcoming from './Upcoming'
import TopRated from './TopRated'
import NowPlaying from './NowPlaying'
import Search from './Search'
import Movie from './Movie'

class Movies extends Component {

    constructor() {
        super()

        this.state = {
            imageBaseUrl: ''
        }
    }

    componentDidMount() {
        moviesSerice.getConfiguration()
            .then(imageBaseUrl => {
                this.setState({ imageBaseUrl })
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component = { Landing }/>
                    <Route path="/popular" render={(props) => <Popular { ...props } imageBaseUrl={ this.state.imageBaseUrl }/>}/>
                    <Route path="/upcoming" render={(props) => <Upcoming { ...props } imageBaseUrl={ this.state.imageBaseUrl }/>}/>
                    <Route path="/nowplaying" render={(props) => <NowPlaying { ...props } imageBaseUrl={ this.state.imageBaseUrl }/>}/>
                    <Route path="/toprated" render={(props) => <TopRated { ...props } imageBaseUrl={ this.state.imageBaseUrl }/>}/>
                    <Route path="/movie/:id" render={(props) => <Movie { ...props } imageBaseUrl={ this.state.imageBaseUrl }/>}/>
                    <Route path="/search/:query" render={(props) => <Search { ...props } imageBaseUrl={ this.state.imageBaseUrl }/>}/>
                </Switch>
            </main>
        )
    }
}

export default Movies