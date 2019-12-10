import React from 'react';
import logo from '../../logo.svg';
import s from './Header.module.css'
import {Col, Container, Row} from 'reactstrap';
import {Link} from "react-router-dom";

function Header(props) {
    const {
        searchText,
        baseUrl,
        onSearchChanged,
    } = props;
    const searchURL = searchText ? `${baseUrl}find/${searchText}/1` : `${baseUrl}`;

    return (
        <header className={s.header}>
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col xs="3" md="2">
                        <Link to={baseUrl}>
                            <img src={logo} className={s.logo} alt="logo"/>
                        </Link>
                    </Col>
                    <Col xs="6" md="8">
                        <input type="text" className="form-control"
                               value={searchText}
                               onChange={(e) => onSearchChanged(e)}
                               placeholder="Enter movie name..."/>
                    </Col>
                    <Col xs="3" md="2">
                        <Link className="w-100 btn btn-primary" to={searchURL}>Search</Link>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
