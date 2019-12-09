import React from 'react';
import {connect} from "react-redux";
import Details from "./Details";
import {getMovieDetails, getPosterUrl, setMovieDetails} from "../../redux/details-reducer";
import {withRouter} from "react-router-dom";

class DetailsContainer extends React.Component {

    componentDidMount() {
        this.props.setMovieDetails({poster_path: ""});
        this.props.getMovieDetails(this.props.lang, this.props.match.params.movieId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.movieDetails !== prevProps.movieDetails) {
            this.props.getPosterUrl(this.props.movieDetails.poster_path, this.props.posterBaseUrl);
        }
    };

    onClickBack = () => {
        window.history.back();
    };

    render() {
        return (
            <Details {...this.props.movieDetails}
                     posterUrl={this.props.posterUrl}
                     onClickBack={this.onClickBack}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movieDetails: state.detailsPage.movieDetails,
        posterUrl: state.detailsPage.posterUrl,
        posterBaseUrl: state.detailsPage.posterBaseUrl,
        lang: state.searchHeader.lang
    }
};

let WithUrlDetailsContainer = withRouter(DetailsContainer);

export default connect(mapStateToProps, {getMovieDetails, setMovieDetails, getPosterUrl})(WithUrlDetailsContainer);
