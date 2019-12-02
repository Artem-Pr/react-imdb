import React from 'react';
import s from './Details.module.css';
import {NavLink} from "react-router-dom";

let Details = (props) => {
    return (
        <section>
            <NavLink to={'/'}>
                <div>Go back</div>
            </NavLink>
            <h1 className={s.Details}>{props.title}</h1>
            <div>Genres: {
                props.genres ? props.genres.map((item, i) => <span key={i}>{item.name} </span>) : ""
            }</div>
            <div>Vote average: <span>{props.vote_average}</span></div>
            <div>Vote count: <span>{props.vote_count}</span></div>
            <div>Release date: <span>{props.release_date}</span></div>
            <img src={props.posterUrl} alt={props.title}/>
            <div>Runtime: <span>{props.vote_count} min</span></div>
            <div>Homepage: <a href={props.homepage}>{props.homepage}</a></div>
            <div>Budget: <span>{props.budget} &#36;</span></div>
            <h3>Overview</h3>
            <p>{props.overview}</p>
        </section>
    );
};

export default Details;
