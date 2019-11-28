import React from 'react';
import logo from '../../logo.svg';
import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <img src={logo} className={s.logo} alt="logo"/>
            <form id="search-form">
                <input type="text" className="form-control" id="searchText" name="searchText"
                       value={props.searchText}
                       onChange={(e) => props.onSearchChanged(e)}
                       placeholder="Enter the name..."/>
                <button type="submit" value="Submit">Search</button>
            </form>
        </header>
    );
}

export default Header;
