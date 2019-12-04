import React from 'react';
import './App.css';
import OutputContainer from "./components/Output/OutputContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DetailsContainer from "./components/Details/DetailsContainer";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <div>
                <Route exact path="/"
                       render={() => <OutputContainer/>}/>
                <Route path="/details/:movieId?"
                       render={() => <DetailsContainer/>}/>
            </div>
        </div>
    );
}

export default App;
