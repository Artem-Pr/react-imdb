import React from 'react';
import style from './VoteAverage.module.css';
import cx from "classnames";

let VoteAverage = (props) => {

    let getVoteAverageColor = (voteAverage) => {
        console.log(style.voteAverageGreen);
        if (voteAverage > 7) return style.voteAverageGreen;
        if (voteAverage > 5) return style.voteAverageGrey;
        return style.voteAverageRed;
    };

    return (
        <span className={cx(getVoteAverageColor(props.vote_average), "font-weight-bold")}>
            {props.vote_average}
        </span>
    );
};

export default VoteAverage;
