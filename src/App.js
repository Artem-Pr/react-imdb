import React from 'react';
import './App.css';
import OutputContainer from "./components/Output/OutputContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer />
            <OutputContainer />
        </div>
    );
}

export default App;
