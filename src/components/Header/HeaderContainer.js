import React from 'react';
import {updateSearchText} from "../../redux/header-reducer";
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
        searchText: state.outputPage.searchText
    }
};

export default connect(mapStateToProps, {updateSearchText})(HeaderContainer);

