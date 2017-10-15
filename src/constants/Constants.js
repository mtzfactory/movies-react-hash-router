const BASEURL = 'https://api.themoviedb.org/3'

const APIKEY = '9714d93d5908534a84bc7009913c604e'

export const CONFIGURATION = BASEURL + '/configuration?api_key=' + APIKEY

export const POPULAR = BASEURL + '/movie/popular?api_key=' + APIKEY
export const TOPRATED = BASEURL + '/movie/top_rated?api_key=' + APIKEY
export const UPCOMING = BASEURL + '/movie/upcoming?api_key=' + APIKEY
export const NOWPLAYING = BASEURL + '/movie/now_playing?api_key=' + APIKEY

export const MOVIEBYID = BASEURL + '/movie/{movieId}?api_key=' + APIKEY

export const SEARCHMOVIES = BASEURL + '/search/movie?api_key=' + APIKEY + '&query={searchMovie}'

export const POSTER_W154 = 'w154'
export const POSTER_W185 = 'w185'
export const POSTER_W342 = 'w342'
export const POSTER_W500 = 'w500'

export const BACKDROP_W780 = 'w780'
export const BACKDROP_W1280 = 'w1280'

// https://developers.themoviedb.org/3/configuration
// https://developers.themoviedb.org/3/movies/get-now-playing