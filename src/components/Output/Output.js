import React from 'react';
import s from './Output.module.css';
import {NavLink} from "react-router-dom";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

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

    return (
        <section className={s.Output}>
            {props.movies === null
                ? <div>searching results</div>
                : <div>
                    <Pagination className="d-flex justify-content-center" aria-label="Page navigation example">
                        {getFirstPageArrow(1)}
                        {pages.map(p => <PaginationItem key={p} active={p === props.currentPage}>
                            <PaginationLink onClick={() => props.onPageChanged(p)}>
                                {p}
                            </PaginationLink>
                        </PaginationItem>)}
                        {getLastPageArrow(props.totalPages)}
                    </Pagination>


                    <table>
                        <thead>
                        <tr>
                            <th>Number</th>
                            {/*<th>Media Type</th>*/}
                            <th>Name</th>
                            <th>Release</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.movies.map((item, i) =>
                            <tr key={item.id}>
                                <td>{props.pageSize * (props.currentPage - 1) + i + 1}</td>
                                {/*<td>{item.media_type}</td>*/}
                                <td>
                                    <NavLink to={`/details/${item.id}`}>
                                        {item.name || item.title}
                                    </NavLink>
                                </td>
                                <td>{item.release_date || item.first_air_date}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div>Total count: {props.totalMoviesCount}</div>
                </div>
            }
        </section>
    );
};

export default Output;
