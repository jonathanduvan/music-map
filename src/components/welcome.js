import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';

const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
      <Counter />
      <Controls />
    </div>
  );
};

const mapStateToProps = (state) => (
  {

  }
);

export default withRouter(connect(mapStateToProps, null)(Welcome));
