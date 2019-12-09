import React from 'react';
import './App.css';
import {connect} from "react-redux";
import OutputContainer from "./components/Output/OutputContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DetailsContainer from "./components/Details/DetailsContainer";
import {Route} from "react-router-dom";
import TitlePageContainer from "./components/TittlePage/TitlePageContainer";

function App({baseUrl}) {
    return (
        <div className="App">
            <HeaderContainer/>
            <div>
                <Route exact path={baseUrl}
                       render={() => <TitlePageContainer/>}/>
                <Route path={`${baseUrl}details/:movieId`}
                       render={() => <DetailsContainer/>}/>
                <Route exact path={`${baseUrl}find/:name/:page`}
                       render={() => <OutputContainer/>}/>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        baseUrl: state.searchHeader.baseUrl
    }
};

export default connect(mapStateToProps, {})(App);
