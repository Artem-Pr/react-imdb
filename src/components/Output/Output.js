import React from 'react';
import s from './Output.module.css';

let Output = (props) => {
    let pages = [];
    if (props.totalPages < 11) {
        for (let i = 1; i <= props.totalPages; i++) {
            pages.push(i);
        }
    } else {
        let i;
        props.currentPage < 4 ? i = 1 : i = props.currentPage - 2;
        if (i > 1) pages.push('start');
        if (props.currentPage + 2 < props.totalPages) {
            for (i; i <= props.currentPage + 2; i++) {
                pages.push(i);
            }
            pages.push('end');
        } else {
            for (i; i <= props.totalPages; i++) {
                pages.push(i);
            }
        }
    }

    return (
        <section className={s.Output}>
            {props.movies === null
                ? <div>searching results</div>
                : <div>
                    <div>Total count: {props.totalMoviesCount}</div>
                    <div>
                        {pages.map(p =>
                            <span key={p}
                                  className={(props.currentPage === p && s.selectedPage) + ' ' + s.pageNumber}
                                  onClick={() => {
                                      props.onPageChanged(p)
                                  }}
                            >{p}</span>
                        )}
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Number</th>
                            <th>Media Type</th>
                            <th>Name</th>
                            <th>Release</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.movies.map((item, i) =>
                            <tr key={item.id}>
                                <td>{props.pageSize * (props.currentPage - 1) + i + 1}</td>
                                <td>{item.media_type}</td>
                                <td>{item.name || item.title}</td>
                                <td>{item.release_date || item.first_air_date}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            }
        </section>
    );
};

export default Output;
