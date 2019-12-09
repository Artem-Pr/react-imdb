import React from 'react';
import style from './VoteAverage.module.css';
import cx from "classnames";

let VoteAverage = (props) => {
    const {
        vote_average
    } = props;

    let getVoteAverageColor = (voteAverage) => {
        if (voteAverage > 7) return style.voteAverageGreen;
        if (voteAverage > 5) return style.voteAverageGrey;
        return style.voteAverageRed;
    };

    return (
        <span className={cx(getVoteAverageColor(vote_average), "font-weight-bold")}>
            {vote_average}
        </span>
    );
};

export default VoteAverage;
