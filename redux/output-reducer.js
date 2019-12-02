import {moviesAPI} from "../api/api";

const SET_MOVIES = 'SET_MOVIES';
const SET_TOTAL_MOVIES_COUNT = 'SET_TOTAL_MOVIES_COUNT';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    movies: null,
    totalMoviesCount: null,
    totalPages: null,
    currentPage: 1,
    pageSize: 20,
    firstPageName: 'First page',
    lastPageName: 'Last page'
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
        default:
            return state;
    }
};

export const setMovies = (movies) => ({type: SET_MOVIES, movies});
export const setTotalMoviesCount = (totalMoviesCount) => ({type: SET_TOTAL_MOVIES_COUNT, totalMoviesCount});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const setCurrent_Page = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const getMovies = (lang, searchText, page) => {
    return (dispatch) => {
        moviesAPI.getMovies(lang, searchText, page)
            .then(response => {
                console.log(response);
                dispatch(setMovies(response.data.results));
                dispatch(setTotalMoviesCount(response.data.total_results));
                dispatch(setTotalPages(response.data.total_pages));
                dispatch(setCurrent_Page(response.data.page))
            });
    }
};

export default outputReducer;