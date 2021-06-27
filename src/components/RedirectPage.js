/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';

import { setExpireTime } from '../actions';

class RedirectPage extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    console.log('history ', history);
    console.log('locationL ', location);
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }

      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      setExpireTime(expiryTime);
      return history.push('/dashboard');
    } catch (error) {
      console.log('error:', error);
      history.push('/');
      return false;
    }
  }

  render() {
    return null;
  }

  // connects particular parts of redux state to this components props
}

const mapStateToProps = (state) => (
  {
    expiryTime: state.count,
  }
);

export default withRouter(connect(mapStateToProps, null)(RedirectPage));
