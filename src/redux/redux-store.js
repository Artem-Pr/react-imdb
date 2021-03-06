import {applyMiddleware, combineReducers, createStore} from "redux";
import searchReducer from "./search-reducer";
import outputReducer from "./output-reducer";
import detailsReducer from "./details-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    searchHeader: searchReducer,
    outputPage: outputReducer,
    detailsPage: detailsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; // for checking store in console (need to use - store.getState())

export default store;