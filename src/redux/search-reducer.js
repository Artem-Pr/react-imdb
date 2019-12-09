const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

let initialState = {
    searchText: '',
    lang: 'en-US',
    media_type: [],
    baseUrl: '/react-imdb/'
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

export const updateSearchText = (searchText) => ({type: UPDATE_SEARCH_TEXT, searchText});

export default searchReducer;