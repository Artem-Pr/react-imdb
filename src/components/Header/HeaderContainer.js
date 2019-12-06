import React from 'react';
import {updateSearchText} from "../../redux/search-reducer";
import {connect} from "react-redux";
import Header from "./Header";
import {getMovieList, setMovies} from "../../redux/output-reducer";


class HeaderContainer extends React.Component {

    onSearchChanged = (e) => {
        this.props.updateSearchText(e.target.value);
    };

    onSearchClick = () => {
        if (this.props.searchText === "") return;
        window.history.replaceState({}, '', `/find/${this.props.searchText}/${1}`);
        this.props.getMovies(this.props.lang, this.props.searchText, 1);
    };

    render() {
        return (
            <Header onSearchChanged={this.onSearchChanged}
                    onSearchClick={this.onSearchClick}
                    searchText={this.props.searchText}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        searchText: state.searchHeader.searchText,
        lang: state.searchHeader.lang
    }
};

export default connect(mapStateToProps, {updateSearchText, setMovies, getMovies: getMovieList})(HeaderContainer);

