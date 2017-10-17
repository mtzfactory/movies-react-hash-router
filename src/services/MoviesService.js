import axios from 'axios'
import * as constants from '../constants/Constants';

class MoviesService {

    __get(url) {
        return axios.get(url)
            .then(function({ data }) {
                return data
            })
    }

    getPopular(page) {
        return this.__get(constants.POPULAR + (page ? '&page=' + page : ''))
    }

    getTopRated(page) {
        return this.__get(constants.TOPRATED + (page ? '&page=' + page : ''))
    }

    getUpcoming(page) {
        return this.__get(constants.UPCOMING + (page ? '&page=' + page : ''))
    }

    getNowPlaying(page) {
        return this.__get(constants.NOWPLAYING + (page ? '&page=' + page : ''))
    }

    getMovieById(id) {
        return this.__get(constants.MOVIEBYID.replace('{movieId}', id))
    }

    searchMovies(q, page) {
        return this.__get(constants.SEARCHMOVIES.replace('{searchMovie}', q) + (page ? '&page=' + page : ''))
    }

    getConfiguration() {
        return this.__get(constants.CONFIGURATION)
            .then(function({ images: { secure_base_url: baseUrl } }) {
                return baseUrl
            })
    }

}

export default new MoviesService()