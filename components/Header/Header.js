import React from 'react';
import logo from '../../logo.svg';
import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <img src={logo} className={s.logo} alt="logo"/>
                <input type="text" className="form-control"
                       value={props.searchText}
                       onChange={(e) => props.onSearchChanged(e)}
                       placeholder="Enter the name..."/>
                <button onClick={() => props.onSearchClick()}>Search</button>
        </header>
    );
}

export default Header;
