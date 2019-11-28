import React from 'react';
import Output from "./Output";
import {connect} from "react-redux";


class OutputContainer extends React.Component {

    render() {
        console.log(this.props.movies);
        return (
            <Output movies={this.props.movies}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movies: state.outputPage.movies
    }
};

export default connect(mapStateToProps, {})(OutputContainer);
