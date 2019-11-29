const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

let initialState = {
    searchText: 'batman',
    lang: 'ru',
    media_type: []
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