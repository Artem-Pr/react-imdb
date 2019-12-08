import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

let PaginationBlock = (props) => {

    let getPagesArray = (curPage, lastPage) => {
        let pagesArray = [];
        if (curPage > 2 && curPage === lastPage) pagesArray.push(curPage - 2);
        if (curPage > 1) pagesArray.push(curPage - 1);
        pagesArray.push(curPage);
        if (curPage < lastPage) pagesArray.push(curPage + 1);
        if (lastPage > 2 && curPage === 1) pagesArray.push(curPage + 2);
        return pagesArray;
    };

    let getFirstPageArrow = (currentPage) => {
        if (currentPage > 1) {
            return <PaginationItem>
                <PaginationLink first tag={Link} to={`${props.baseUrl}find/${props.movieName}/1`} />
            </PaginationItem>
        }
    };
    let getLastPageArrow = (currentPage, lastPage) => {
        if (currentPage + 1 < lastPage) {
            return <PaginationItem>
                <PaginationLink last tag={Link} to={`${props.baseUrl}find/${props.movieName}/${lastPage}`} />
            </PaginationItem>
        }
    };

    return <Pagination>
        {getFirstPageArrow(props.currentPage)}
        {getPagesArray(props.currentPage, props.totalPages)
            .map(p => <PaginationItem key={p} active={p === props.currentPage}>
            <PaginationLink tag={Link} to={`${props.baseUrl}find/${props.movieName}/${p}`}>
                {p}
            </PaginationLink>
        </PaginationItem>)}
        {getLastPageArrow(props.currentPage, props.totalPages)}
    </Pagination>
};

PaginationBlock.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    movieName: PropTypes.string
};

export default PaginationBlock;