import React from 'react';
import {updateSearchText} from "../../redux/search-reducer";
import {connect} from "react-redux";
import Header from "./Header";
import {getMovies, setMovies} from "../../redux/output-reducer";


class HeaderContainer extends React.Component {

    onSearchChanged = (e) => {
        this.props.updateSearchText(e.target.value);
    };

    onSearchClick = () => {
        this.props.getMovies(this.props.lang, this.props.searchText);
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

export default connect(mapStateToProps, {updateSearchText, setMovies, getMovies})(HeaderContainer);

