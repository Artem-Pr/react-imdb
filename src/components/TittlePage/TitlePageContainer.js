import React from 'react';
import {connect} from "react-redux";
import TitlePage from "./TitlePage";
import {discoverMovieList, getMovieList, setCurrentPage} from "../../redux/output-reducer";


class TitlePageContainer extends React.Component {

    componentDidMount() {
        let currentPage = 1;
        this.props.discoverMovieList(this.props.lang, currentPage, this.props.smallPosterBaseUrl);
        this.props.setCurrentPage(currentPage);
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

export default connect(mapStateToProps, {getMovieList, discoverMovieList, setCurrentPage})(TitlePageContainer);
