import React from 'react';
import Output from "./Output";
import {updateSearchText} from "../../redux/header-reducer";
import {connect} from "react-redux";


class OutputContainer extends React.Component {

    render() {
        return (
            <Output/>
        );
    }
}

// let mapStateToProps = (state) => {
//     return {
//         searchText: state.outputPage.searchText
//     }
// };

// export default connect(mapStateToProps, {updateSearchText})(OutputContainer);
export default OutputContainer;

