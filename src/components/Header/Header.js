import React from 'react';
import logo from '../../logo.svg';
import s from './Header.module.css'
import {Col, Container, Row} from 'reactstrap';
import {Link} from "react-router-dom";

function Header(props) {
    const searchURL = props.searchText ? `${props.baseUrl}find/${props.searchText}/1` : "";
    return (
        <header className={s.header}>
            <Container>
                <Row>
                    <Col xs="3" md="2" className="d-flex align-items-center">
                        <img src={logo} className={s.logo} alt="logo"/>
                    </Col>
                    <Col xs="6" md="8" className="d-flex align-items-center">
                        <input type="text" className="form-control"
                               value={props.searchText}
                               onChange={(e) => props.onSearchChanged(e)}
                               placeholder="Enter movie name..."/>
                    </Col>
                    <Col xs="3" md="2" className="d-flex align-items-center">
                        <Link className="w-100 btn btn-primary" to={searchURL}>Search</Link>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
