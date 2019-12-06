import React from 'react';
import style from './Output.module.css';
import {Col, Row} from 'reactstrap';
import cx from "classnames";
import PaginationBlock from "../Common/Pagination/Pagination";

let OutputNav = (props) => {
    return (
        <Row className="justify-content-center position-relative">
            <Col md="10" className="d-flex justify-content-center">
                <div className={cx(style.totalMoviesCount, "position-absolute")}>
                    <span className="mr-2 font-weight-bold text-uppercase">Total count:</span>
                    <span className="text-uppercase font-weight-bold text-muted">{props.totalMoviesCount}</span>
                </div>
                <PaginationBlock currentPage={props.currentPage}
                                 totalPages={props.totalPages}
                                 onPageChanged={props.onPageChanged}
                                 movieName={props.movieName}/>
            </Col>
        </Row>
    );
};

export default OutputNav;
