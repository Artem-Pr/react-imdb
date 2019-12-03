import React from 'react';
import style from './Output.module.css';
import {NavLink} from 'react-router-dom';
import {Col, Container, Pagination, PaginationItem, PaginationLink, Row} from 'reactstrap';
import cx from "classnames";
import placeHolder from './../../img/Placeholder(92x138).png';

let Output = (props) => {
    let getPagesArray = (curPage, lastPage) => {
        let pagesArray = [];
        if (curPage > 2 && curPage === lastPage) pagesArray.push(curPage - 2);
        if (curPage > 1) pagesArray.push(curPage - 1);
        pagesArray.push(curPage);
        if (curPage < lastPage) pagesArray.push(curPage + 1);
        if (lastPage > 2 && curPage === 1) pagesArray.push(curPage + 2);
        return pagesArray;
    };
    let pages = getPagesArray(props.currentPage, props.totalPages);

    let getFirstPageArrow = (page) => {
        if (props.currentPage > 1) {
            return <PaginationItem>
                <PaginationLink first onClick={() => props.onPageChanged(1)}/>
            </PaginationItem>
        }
    };
    let getLastPageArrow = (page) => {
        if (props.currentPage + 1 < props.totalPages) {
            return <PaginationItem>
                <PaginationLink last onClick={() => props.onPageChanged(props.totalPages)}/>
            </PaginationItem>
        }
    };

    let getVoteAverageColor = (voteAverage) => {
      if (voteAverage > 7) return style.voteAverageGreen;
      if (voteAverage > 5) return style.voteAverageGrey;
      return style.voteAverageRed;
    };

    return (
        <section className={style.output}>
            {props.movies === null
                ? <div>searching results</div>
                : <div>
                    <Pagination className="d-flex justify-content-center">
                        {getFirstPageArrow(1)}
                        {pages.map(p => <PaginationItem key={p} active={p === props.currentPage}>
                            <PaginationLink onClick={() => props.onPageChanged(p)}>
                                {p}
                            </PaginationLink>
                        </PaginationItem>)}
                        {getLastPageArrow(props.totalPages)}
                    </Pagination>

                    <Container>
                        {props.movies.map((item, i) =>
                            <Row key={item.id} className="justify-content-center">
                                <Col md="10">
                                    <NavLink className={cx(style.moviesItem, "d-flex mb-2 align-items-center border border-primary rounded")}
                                        to={`/details/${item.id}`}>
                                        <span className={cx(style.number, "ml-3 mb-0")}>{props.pageSize * (props.currentPage - 1) + i + 1}</span>
                                        <img className={cx(style.posterImg, "ml-3")} src={props.postersUrl[i] || placeHolder}
                                             alt={item.title + '_img'}/>
                                        <div className={cx(style.moviesItemTitle, "d-flex flex-column ml-3 mr-auto")}>
                                            <h4 className="mb-0">{item.name || item.title}</h4>
                                            <span>{item.release_date || item.first_air_date}</span>
                                        </div>
                                        <span className={cx(getVoteAverageColor(item.vote_average), "ml-3 mr-3 text-center font-weight-bold")}>{item.vote_average}</span>
                                    </NavLink>
                                </Col>
                            </Row>
                        )}
                        <Row className="justify-content-center">
                            <Col md="10">
                                <div>Total count: {props.totalMoviesCount}</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </section>
    );
};

export default Output;
