import {combineReducers, createStore} from "redux";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
    outputPage: headerReducer
});

let store = createStore(reducers);

window.store = store; // for checking store in console (need to use - store.getState())

export default store;