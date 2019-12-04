import React from 'react';
import style from './Output.module.css';
import {NavLink} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';
import cx from "classnames";
import placeHolder from './../../img/Placeholder(92x138).png';
import OutputNav from "./OutputNav";
import VoteAverage from "../Common/VoteAverage/VoteAverage";

let Output = (props) => {
    return (
        <section className={style.output}>
            {props.movies === null
                ? <div>searching results</div>
                : <div>
                    <Container>
                        {props.totalPages > 1
                            ? <OutputNav currentPage={props.currentPage}
                                         totalPages={props.totalPages}
                                         totalMoviesCount={props.totalMoviesCount}
                                         onPageChanged={props.onPageChanged}/>
                            : ""}
                        {props.movies.length
                            ? props.movies.map((item, i) =>
                                <Row key={item.id} className="justify-content-center">
                                    <Col md="10">
                                        <NavLink
                                            className={cx(style.moviesItem, "d-flex mb-2 align-items-center border border-primary rounded")}
                                            to={`/details/${item.id}`}>
                                        <span
                                            className={cx(style.number, "ml-3 mb-0")}>{props.pageSize * (props.currentPage - 1) + i + 1}</span>
                                            <img className={cx(style.posterImg, "ml-3")}
                                                 src={props.postersUrl[i] || placeHolder}
                                                 alt={item.title + '_img'}/>
                                            <div
                                                className={cx(style.moviesItemTitle, "d-flex flex-column ml-3 mr-auto")}>
                                                <h4 className="mb-0">{item.name || item.title}</h4>
                                                <span>{item.release_date || item.first_air_date}</span>
                                            </div>
                                            <div className={cx(style.voteAverage, "ml-3 mr-3 text-center")}>
                                                <VoteAverage vote_average={item.vote_average}/>
                                            </div>
                                        </NavLink>
                                    </Col>
                                </Row>)
                            : <span>Sorry, nothing was found</span>
                        }
                        {props.totalPages > 1
                            ? <OutputNav currentPage={props.currentPage}
                                         totalPages={props.totalPages}
                                         totalMoviesCount={props.totalMoviesCount}
                                         onPageChanged={props.onPageChanged}/>
                            : ""}
                    </Container>
                </div>
            }
        </section>
    );
};

export default Output;
