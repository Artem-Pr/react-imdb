import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

let PaginationBlock = (props) => {
    const {
        baseUrl,
        movieName,
        currentPage,
        totalPages
    } = props;

    let getPagesArray = (curPage, lastPage) => {
        let pagesArray = [];
        if (curPage > 2 && curPage === lastPage) pagesArray.push(curPage - 2);
        if (curPage > 1) pagesArray.push(curPage - 1);
        pagesArray.push(curPage);
        if (curPage < lastPage) pagesArray.push(curPage + 1);
        if (lastPage > 2 && curPage === 1) pagesArray.push(curPage + 2);
        return pagesArray;
    };

    let getFirstPageArrow = (currentPage, lastPage) => {
        if (currentPage > 2 && lastPage > 3) {
            return <PaginationItem>
                <PaginationLink first tag={Link} to={`${baseUrl}find/${movieName}/1`} />
            </PaginationItem>
        }
    };
    let getLastPageArrow = (currentPage, lastPage) => {
        if (currentPage + 1 < lastPage && lastPage > 3) {
            return <PaginationItem>
                <PaginationLink last tag={Link} to={`${baseUrl}find/${movieName}/${lastPage}`} />
            </PaginationItem>
        }
    };

    return <Pagination>
        {getFirstPageArrow(currentPage, totalPages)}
        {getPagesArray(currentPage, totalPages)
            .map(p => <PaginationItem key={p} active={p === currentPage}>
            <PaginationLink tag={Link} to={`${baseUrl}find/${movieName}/${p}`}>
                {p}
            </PaginationLink>
        </PaginationItem>)}
        {getLastPageArrow(currentPage, totalPages)}
    </Pagination>
};

PaginationBlock.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    movieName: PropTypes.string
};

export default PaginationBlock;