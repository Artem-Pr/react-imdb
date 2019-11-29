import React from 'react';
import Output from "./Output";
import {connect} from "react-redux";
import {getMovies} from "../../redux/output-reducer";


class OutputContainer extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.getMovies(this.props.lang, this.props.searchText, pageNumber);
    };

    render() {
        return (
            <Output movies={this.props.movies}
                    totalMoviesCount={this.props.totalMoviesCount}
                    totalPages={this.props.totalPages}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movies: state.outputPage.movies,
        totalMoviesCount : state.outputPage.totalMoviesCount,
        totalPages: state.outputPage.totalPages,
        currentPage: state.outputPage.currentPage,
        lang: state.searchHeader.lang,
        searchText: state.searchHeader.searchText
    }
};

export default connect(mapStateToProps, {getMovies})(OutputContainer);
