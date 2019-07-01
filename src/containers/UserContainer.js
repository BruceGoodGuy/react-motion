import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Login from './../components/Login/login';
import {doLogin} from './../actions/index';
class UserContainer extends Component {
  render(){
      let {letSigin} = this.props;
    return (
        <Fragment>
            <Login letSigin = {letSigin}></Login>
        </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
    return (
        {
            letSigin: (users) => {
                dispatch(doLogin(users, dispatch));
            }
        }
    )
}
export default connect(null, mapDispatchToProps)(UserContainer);
