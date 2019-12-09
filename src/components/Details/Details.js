import React from 'react';
import {Link} from "react-router-dom";
import {Button, Col, Container, Row} from "reactstrap";
import placeHolder from "../../img/Placeholder(300x450).png";
import VoteAverage from "../Common/VoteAverage/VoteAverage";

let getFormatGenres = (genresArray) => {
    return genresArray.map((item, i) => {
        if (genresArray.length - 1 === i) return item.name;
        return item.name + ", ";
    });
};

let Details = (props) => {
    const {
        posterUrl,
        title,
        genres,
        vote_average,
        vote_count,
        release_date,
        runtime,
        budget,
        overview,
        homepage,
        onClickBack,
    } = props;

    return (
        <section>
            <Container className="mt-4">
                <Row>
                    <Col xs="5" md="3">
                        <Button outline className="mb-4" color="primary" onClick={() => {onClickBack()}}>
                            Go Back
                        </Button>
                        <img className="w-100"
                             src={posterUrl || placeHolder}
                             alt={title + '_img'}/>
                    </Col>
                    <Col xs="7" md="9">
                        <h2 className="mb-3">{title}</h2>
                        <div>
                            <span className="mr-2">Genres:</span>
                            {genres ? getFormatGenres(genres).map((item, i) =>
                                <span className="text-muted text-lowercase" key={i}>{item}</span>) : "-"}
                        </div>
                        <div>
                            <span>Vote average:</span>
                            <span className="ml-2">
                                <VoteAverage vote_average={vote_average}/>
                            </span>
                        </div>
                        <div>
                            <span>Vote count:</span>
                            <span className="ml-2 text-muted">{vote_count}</span>
                        </div>
                        <div>
                            <span>Release date:</span>
                            <span className="ml-2 text-muted">{release_date}</span>
                        </div>
                        <div>
                            <span>Runtime:</span>
                            <span className="ml-2 text-muted">{runtime} min</span>
                        </div>
                        <div>
                            <span>Budget:</span>
                            <span className="ml-2 text-muted">{budget} &#36;</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4">
                        <h4>Overview</h4>
                        <p>{overview}</p>
                        <div>
                            <span className="mr-2">Homepage:</span>
                            <a href={homepage || undefined}>{homepage || "-"}</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Details;
