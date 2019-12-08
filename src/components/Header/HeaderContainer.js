import React from 'react';
import {updateSearchText} from "../../redux/search-reducer";
import {connect} from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {

    onSearchChanged = (e) => {
        this.props.updateSearchText(e.target.value);
    };

    render() {
        return (
            <Header onSearchChanged={this.onSearchChanged}
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

export default connect(mapStateToProps, {updateSearchText})(HeaderContainer);

