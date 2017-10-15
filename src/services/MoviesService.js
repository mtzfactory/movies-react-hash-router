import axios from 'axios'
import * as constants from '../constants/Constants';

class MoviesService {

    __get(url) {
        return axios.get(url)
            .then(function({ data }) {
                return data
            })
    }

    getPopular() {
        return this.__get(constants.POPULAR)
    }

    getTopRated() {
        return this.__get(constants.TOPRATED)
    }

    getUpcoming() {
        return this.__get(constants.UPCOMING)
    }

    getNowPlaying() {
        return this.__get(constants.NOWPLAYING)
    }

    getMovieById(id) {
        return this.__get(constants.MOVIEBYID.replace('{movieId}', id))
    }

    searchMovies(q) {
        return this.__get(constants.SEARCHMOVIES.replace('{searchMovie}', q))
    }

    getConfiguration() {
        return this.__get(constants.CONFIGURATION)
            .then(function({ images: { secure_base_url: baseUrl } }) {
                return baseUrl
            })
    }

}

export default new MoviesService()