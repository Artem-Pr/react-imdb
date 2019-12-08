import React from 'react';
import './App.css';
import OutputContainer from "./components/Output/OutputContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DetailsContainer from "./components/Details/DetailsContainer";
import {Route} from "react-router-dom";
import TittlePageContainer from "./components/TittlePage/TittlePageContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <div>
                <Route exact path="/"
                       render={() => <TittlePageContainer/>}/>
                <Route path="/details/:movieId"
                       render={() => <DetailsContainer/>}/>
                <Route exact path="/find/:name/:page"
                       render={() => <OutputContainer/>}/>
            </div>
        </div>
    );
}

export default App;
