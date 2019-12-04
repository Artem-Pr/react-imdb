import React from 'react';
import style from './Details.module.css';
import {NavLink} from "react-router-dom";
import {Button, Col, Container, Row} from "reactstrap";
import cx from "classnames";
import placeHolder from "../../img/Placeholder(300x450).png";
import VoteAverage from "../Common/VoteAverage/VoteAverage";

let getFormatGenres = (genresArray) => {
    return genresArray.map((item, i) => {
        if (genresArray.length - 1 === i) return item.name;
        return item.name + ", ";
    });
};

let Details = (props) => {
    return (
        <section>
            <Container className="mt-4">
                <Row>
                    <Col xs="5" md="3">
                        <NavLink to={'/'}>
                            <Button className="mb-4" outline color="primary">Go back</Button>
                        </NavLink>
                        <img className="w-100"
                             src={props.posterUrl || placeHolder}
                             alt={props.title + '_img'}/>
                    </Col>
                    <Col xs="7" md="9">
                        <h2 className="mb-3">{props.title}</h2>
                        <div>
                            <span className="mr-2">Genres:</span>
                            {props.genres ? getFormatGenres(props.genres).map((item, i) =>
                                <span className="text-muted text-lowercase" key={i}>{item}</span>) : "-"}
                        </div>
                        <div>
                            <span>Vote average:</span>
                            <span className="ml-2">
                                <VoteAverage vote_average={props.vote_average}/>
                            </span>
                        </div>
                        <div>
                            <span>Vote count:</span>
                            <span className="ml-2 text-muted">{props.vote_count}</span>
                        </div>
                        <div>
                            <span>Release date:</span>
                            <span className="ml-2 text-muted">{props.release_date}</span>
                        </div>
                        <div>
                            <span>Runtime:</span>
                            <span className="ml-2 text-muted">{props.runtime} min</span>
                        </div>
                        <div>
                            <span>Budget:</span>
                            <span className="ml-2 text-muted">{props.budget} &#36;</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4">
                        <h4>Overview</h4>
                        <p>{props.overview}</p>
                        <div>
                            <span className="mr-2">Homepage:</span>
                            <a href={props.homepage || false}>{props.homepage || "-"}</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Details;
