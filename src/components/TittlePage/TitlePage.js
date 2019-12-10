import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {Link} from "react-router-dom";
import cx from "classnames";
import style from "../Output/Output.module.css";
import placeHolder from "../../img/Placeholder(92x138).png";
import VoteAverage from "../Common/VoteAverage/VoteAverage";

let TitlePage = (props) => {
    const {
        movies,
        currentPage,
        baseUrl,
        pageSize,
        postersUrl
    } = props;

    return (
        <section className="mt-3">
            <Container>
                <Row>
                    <Col>
                        <h2 className="mb-1 text-center">New movies in theaters</h2>
                        <h4 className="mb-3 text-center">Opening this month</h4>
                    </Col>
                </Row>
                {movies.map((item, i) =>
                    <Row key={item.id} className="justify-content-center">
                        <Col md="10">
                            <Link
                                className={cx(style.moviesItem, "d-flex mb-2 align-items-center btn btn-light")}
                                to={`${baseUrl}details/${item.id}`}>
                                        <span
                                            className={cx(style.number, "ml-3 mb-0")}>{pageSize * (currentPage - 1) + i + 1}</span>
                                <img className={cx(style.posterImg, "ml-3")}
                                     src={postersUrl[i] || placeHolder}
                                     alt={item.title + '_img'}/>
                                <div
                                    className={cx(style.moviesItemTitle, "d-flex ml-3 mr-auto text-left flex-column")}>
                                    <h4 className="mb-0">{item.name || item.title}</h4>
                                    <span>{item.release_date || item.first_air_date}</span>
                                </div>
                                <div className={cx(style.voteAverage, "ml-3 mr-3 text-center")}>
                                    <VoteAverage vote_average={item.vote_average}/>
                                </div>
                            </Link>
                        </Col>
                    </Row>)}
            </Container>
        </section>
    );
};

export default TitlePage;
