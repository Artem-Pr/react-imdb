import {moviesAPI} from "../api/api";

const SET_MOVIES = 'SET_MOVIES';
const SET_TOTAL_MOVIES_COUNT = 'SET_TOTAL_MOVIES_COUNT';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_POSTERS_URL = 'SET_POSTERS_URL';

let initialState = {
    movies: null,
    totalMoviesCount: null,
    totalPages: null,
    currentPage: 1,
    pageSize: 20,
    smallPosterBaseUrl: 'https://image.tmdb.org/t/p/w92',
    postersUrl: []
};

const outputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        case SET_TOTAL_MOVIES_COUNT:
            return {
                ...state,
                totalMoviesCount: action.totalMoviesCount
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_POSTERS_URL:
            return {
                ...state,
                postersUrl: action.urlsArray
            };
        default:
            return state;
    }
};

export const setMovies = (movies) => ({type: SET_MOVIES, movies});
export const setTotalMoviesCount = (totalMoviesCount) => ({type: SET_TOTAL_MOVIES_COUNT, totalMoviesCount});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setPostersUrl = (urlsArray) => ({type: SET_POSTERS_URL, urlsArray});

export const getMovieList = (lang, searchText, page, smallPosterBaseUrl) => {
    return (dispatch) => {
        moviesAPI.getMovies(lang, searchText, page)
            .then(response => {
                dispatch(setTotalMoviesCount(response.data.total_results));
                dispatch(setTotalPages(response.data.total_pages));
                dispatch(getPostersUrl(response.data.results, smallPosterBaseUrl));
                dispatch(setMovies(response.data.results));
            });
    }
};

export const discoverMovieList = (lang, page, smallPosterBaseUrl) => {
    return (dispatch) => {
        moviesAPI.discoverMovies(lang, page)
            .then(response => {
                dispatch(setTotalMoviesCount(response.data.total_results));
                dispatch(setTotalPages(response.data.total_pages));
                dispatch(getPostersUrl(response.data.results, smallPosterBaseUrl));
                dispatch(setMovies(response.data.results));
            });
    }
};

const getPostersUrl = (moviesArray, smallPosterBaseUrl) => {
    let postersUrlArray = moviesArray.map(item => {
        if (item.poster_path) return smallPosterBaseUrl + item.poster_path;
        return null;
    });
    return (dispatch) => {
        dispatch(setPostersUrl(postersUrlArray));
    };
};

export default outputReducer;