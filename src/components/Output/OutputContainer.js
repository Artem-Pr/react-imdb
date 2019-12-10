import React from 'react';
import Output from "./Output";
import {connect} from "react-redux";
import {getMovieList, setCurrentPage} from "../../redux/output-reducer";
import {withRouter} from "react-router-dom";
import {updateSearchText} from "../../redux/search-reducer";


class OutputContainer extends React.Component {

    componentDidMount() {
        let page = +this.props.match.params.page;
        let name = this.props.match.params.name;

        if (name) this.props.updateSearchText(name);
        if (+this.props.currentPage === page)
            this.props.getMovieList(this.props.lang, name, page, this.props.smallPosterBaseUrl);
        else this.props.setCurrentPage(page);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let page = +this.props.match.params.page;
        let name = this.props.match.params.name;

        window.scrollTo({top: 0});

        if (page !== +prevProps.currentPage) {
            this.props.setCurrentPage(page);
        }
        if (+this.props.currentPage !== +prevProps.currentPage || name !== prevProps.match.params.name) {
            this.props.getMovieList(this.props.lang, name, page, this.props.smallPosterBaseUrl);
        }
    };

    render() {
        return (this.props.movies
                ? <Output movies={this.props.movies}
                          totalMoviesCount={this.props.totalMoviesCount}
                          totalPages={this.props.totalPages}
                          currentPage={this.props.currentPage}
                          pageSize={this.props.pageSize}
                          postersUrl={this.props.postersUrl}
                          baseUrl={this.props.baseUrl}
                          movieName={this.props.searchText}/>
                : ''
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
        searchText: state.searchHeader.searchText,
        baseUrl: state.searchHeader.baseUrl
    }
};

let WithUrlOutputContainer = withRouter(OutputContainer);

export default connect(mapStateToProps, {getMovieList, updateSearchText, setCurrentPage})(WithUrlOutputContainer);
