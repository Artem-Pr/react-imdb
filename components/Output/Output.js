import React from 'react';
import s from './Output.module.css';

let Output = (props) => {
    return (
        <section className={s.Output}>
            {props.movies === null
                ? <div>searching results</div>
                : props.movies.map(item => <div key={item.id}>{item.name || item.title}</div>)
            }
        </section>
    );
};

export default Output;
