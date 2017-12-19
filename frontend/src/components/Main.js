import React, { Component } from 'react';
import Routes from '../routes/Routes';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import login from '../redux/actions';
import { withRouter } from 'react-router-dom';


class app extends Component {

	render() {
		console.log("state: ", this.props);
    console.log("USER: ", this.props.user);
    
    return (
			<div>
				<NavBar />
			
      	<Routes />
			</div>
		);
  	}
}


function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  const LOGIN = "LOGIN";
  return {
    login: () => {dispatch({type: LOGIN})},
  } 
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
export default App;
