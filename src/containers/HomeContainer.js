import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Home from './../components/Home/home';
class HomeContainer extends Component {
    render(){
        return (
            <Fragment>
                <Home></Home>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return (
        {
        }
    )
}
export default connect(null, mapDispatchToProps)(HomeContainer);
