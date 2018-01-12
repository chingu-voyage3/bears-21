import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import './styles.css';


ReactDOM.render(
  <Provider store={store}>
  	<Router>
	  	<Main />
  	</Router>
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
