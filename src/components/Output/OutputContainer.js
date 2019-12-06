import React from 'react';
import Output from "./Output";
import {connect} from "react-redux";
import {getMovieList, getPostersUrl} from "../../redux/output-reducer";
import {withRouter} from "react-router-dom";
import {updateSearchText} from "../../redux/search-reducer";


class OutputContainer extends React.Component {

    componentDidMount() {
        if (this.props.match.params.name) this.props.updateSearchText(this.props.match.params.name);
        this.props.getMovieList(this.props.lang, this.props.match.params.name, this.props.match.params.page);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.movies !== prevProps.movies) {
            this.props.getPostersUrl(this.props.movies, this.props.smallPosterBaseUrl);
        }
    };

    onPageChanged = (e, pageNumber) => {
        e.preventDefault();
        this.props.getMovieList(this.props.lang, this.props.searchText, pageNumber);
        window.history.replaceState({}, '', `/find/${this.props.searchText}/${pageNumber}`);
        window.scrollTo({top: 0});
    };

    render() {
        return (
            <Output movies={this.props.movies}
                    totalMoviesCount={this.props.totalMoviesCount}
                    totalPages={this.props.totalPages}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    postersUrl={this.props.postersUrl}
                    movieName={this.props.searchText}
                    onPageChanged={this.onPageChanged}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movies: state.outputPage.movies,
        totalMoviesCount: state.outputPage.totalMoviesCount,
        totalPages: state.outputPage.totalPages,
        currentPage: state.outputPage.currentPage,
        pageSize: state.outputPage.pageSize,
        postersUrl: state.outputPage.postersUrl,
        smallPosterBaseUrl: state.outputPage.smallPosterBaseUrl,
        lang: state.searchHeader.lang,
        searchText: state.searchHeader.searchText
    }
};

let WithUrlOutputContainer = withRouter(OutputContainer);

export default connect(mapStateToProps, {getMovieList, getPostersUrl, updateSearchText})(WithUrlOutputContainer);
