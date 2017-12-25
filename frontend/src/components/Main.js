import React, { Component } from 'react';
import Routes from '../routes/Routes';
import NavBar from './NavBar';
import Footer from './Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class app extends Component {

	render() {
		console.log("state: ", this.props);
    console.log("USER: ", this.props.user);
    
    return (
			<div>
				<NavBar />
			
      	<Routes />
        <Footer />
			</div>
		);
  	}
}

const App = withRouter(connect()(app));
export default App;
