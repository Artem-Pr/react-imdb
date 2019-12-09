import React from 'react';
import {connect} from "react-redux";
import TitlePage from "./TitlePage";


class TitlePageContainer extends React.Component {

    render() {
        return (
            <TitlePage />
        );
    }
}

let mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {})(TitlePageContainer);
