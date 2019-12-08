import React from 'react';
import Output from "./Output";
import {connect} from "react-redux";
import {getMovieList, setCurrentPage} from "../../redux/output-reducer";
import {withRouter} from "react-router-dom";
import {updateSearchText} from "../../redux/search-reducer";


class OutputContainer extends React.Component {

    componentDidMount() {
        if (this.props.match.params.name) this.props.updateSearchText(this.props.match.params.name);
        this.props.getMovieList(
            this.props.lang,
            this.props.match.params.name,
            this.props.match.params.page,
            this.props.smallPosterBaseUrl
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (+this.props.match.params.page !== +prevProps.currentPage) {
            this.props.setCurrentPage(+this.props.match.params.page);
        }
        if (+this.props.currentPage !== +prevProps.currentPage) {
            this.props.getMovieList(
                this.props.lang,
                this.props.match.params.name,
                this.props.match.params.page,
                this.props.smallPosterBaseUrl
            );
        }
    };

    render() {
        return (
            <Output movies={this.props.movies}
                    totalMoviesCount={this.props.totalMoviesCount}
                    totalPages={this.props.totalPages}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    postersUrl={this.props.postersUrl}
                    movieName={this.props.searchText}/>
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

export default connect(mapStateToProps, {getMovieList, updateSearchText, setCurrentPage})(WithUrlOutputContainer);
