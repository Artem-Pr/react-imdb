import React from 'react';
import style from './Output.module.css';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';
import cx from "classnames";
import placeHolder from './../../img/Placeholder(92x138).png';
import OutputNav from "./OutputNav";
import VoteAverage from "../Common/VoteAverage/VoteAverage";

let Output = (props) => {
    const {
        movies,
        totalPages,
        currentPage,
        totalMoviesCount,
        baseUrl,
        movieName,
        pageSize,
        postersUrl
    } = props;

    return (
        <section className="mt-5">
            <Container>
                {totalPages > 1
                    ? <OutputNav currentPage={currentPage}
                                 totalPages={totalPages}
                                 totalMoviesCount={totalMoviesCount}
                                 baseUrl={baseUrl}
                                 movieName={movieName}/>
                    : ""}
                {movies.length
                    ? movies.map((item, i) =>
                        <Row key={item.id} className="justify-content-center">
                            <Col md="10">
                                <Link
                                    className={cx(style.moviesItem, "d-flex mb-2 align-items-center border border-secondary rounded")}
                                    to={`${baseUrl}details/${item.id}`}>
                                        <span
                                            className={cx(style.number, "ml-3 mb-0")}>{pageSize * (currentPage - 1) + i + 1}</span>
                                    <img className={cx(style.posterImg, "ml-3")}
                                         src={postersUrl[i] || placeHolder}
                                         alt={item.title + '_img'}/>
                                    <div
                                        className={cx(style.moviesItemTitle, "d-flex flex-column ml-3 mr-auto")}>
                                        <h4 className="mb-0">{item.name || item.title}</h4>
                                        <span>{item.release_date || item.first_air_date}</span>
                                    </div>
                                    <div className={cx(style.voteAverage, "ml-3 mr-3 text-center")}>
                                        <VoteAverage vote_average={item.vote_average}/>
                                    </div>
                                </Link>
                            </Col>
                        </Row>)
                    : <span>Sorry, nothing was found</span>
                }
                {totalPages > 1
                    ? <OutputNav currentPage={currentPage}
                                 totalPages={totalPages}
                                 totalMoviesCount={totalMoviesCount}
                                 baseUrl={baseUrl}
                                 movieName={movieName}/>
                    : ""}
            </Container>
        </section>
    );
};

export default Output;
