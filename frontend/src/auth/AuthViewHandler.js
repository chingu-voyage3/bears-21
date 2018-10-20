import React  from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

class AuthViewHandler extends React.Component<Props, State> {
  render() {
    //console.log(this.props);
    const { currentUser, children, data } = this.props;

    if (!isEmpty(currentUser)) return children(true);

    if (data && data.loading) return <div>Loading</div>;

    return children(false);
  }
}

export default connect((state) => ({
  currentUser: state.userReducer.user
}))(AuthViewHandler);
