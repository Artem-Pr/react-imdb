import React from 'react';
import {connect} from "react-redux";
import TitlePage from "./TitlePage";
import {discoverMovieList, getMovieList} from "../../redux/output-reducer";


class TitlePageContainer extends React.Component {

    componentDidMount() {
        this.props.discoverMovieList(this.props.lang, this.props.smallPosterBaseUrl);
    }

    render() {
        return (this.props.movies
                ? <TitlePage movies={this.props.movies}
                          currentPage={this.props.currentPage}
                          pageSize={this.props.pageSize}
                          postersUrl={this.props.postersUrl}
                          baseUrl={this.props.baseUrl}/>
                : ''
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movies: state.outputPage.movies,
        currentPage: state.outputPage.currentPage,
        pageSize: state.outputPage.pageSize,
        postersUrl: state.outputPage.postersUrl,
        smallPosterBaseUrl: state.outputPage.smallPosterBaseUrl,
        lang: state.searchHeader.lang,
        baseUrl: state.searchHeader.baseUrl
    }
};

export default connect(mapStateToProps, {getMovieList, discoverMovieList})(TitlePageContainer);
