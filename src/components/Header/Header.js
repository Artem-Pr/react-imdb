import React from 'react';
import logo from '../../logo.svg';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {Button, Col, Container, Row} from 'reactstrap';

function Header(props) {
    return (
        <header className={s.header}>
            <Container>
                <Row>
                    <Col xs="2" className="d-flex align-items-center">
                        <img src={logo} className={s.logo} alt="logo"/>
                    </Col>
                    <Col xs="8" className="d-flex align-items-center">
                        <input type="text" className="form-control"
                               value={props.searchText}
                               onChange={(e) => props.onSearchChanged(e)}
                               placeholder="Enter the name..."/>
                    </Col>
                    <Col xs="2" className="d-flex align-items-center">
                        <NavLink className="w-100" to={'/'}>
                            <Button className="w-100" color="primary" onClick={() => props.onSearchClick()}>Search</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
