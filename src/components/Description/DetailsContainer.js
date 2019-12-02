import React from 'react';
import {connect} from "react-redux";
import Details from "./Details";
import {getDetails} from "../../redux/details-reducer";
import {withRouter} from "react-router-dom";


class DetailsContainer extends React.Component {

    componentDidMount() {
        this.props.getDetails(this.props.lang, this.props.match.params.movieId);
    }

    render() {
        return (
            <Details {...this.props.movieDetails}
                     posterUrl={this.props.posterUrl}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movieDetails: state.detailsPage.movieDetails,
        posterUrl: state.detailsPage.posterUrl,
        lang: state.searchHeader.lang,
    }
};

let WithUrlDateDetailsContainer = withRouter(DetailsContainer);

export default connect(mapStateToProps, {getDetails})(WithUrlDateDetailsContainer);
