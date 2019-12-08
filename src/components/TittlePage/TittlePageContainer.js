import React from 'react';
import {connect} from "react-redux";
import TittlePage from "./TittlePage";


class TittlePageContainer extends React.Component {

    render() {
        return (
            <TittlePage />
        );
    }
}

let mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {})(TittlePageContainer);
