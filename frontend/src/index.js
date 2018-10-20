import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { initStore } from "./Redux/store";
import Routes from './Routes';
import './styles.css';

const storedData = localStorage.getItem('hissues');

const store = initStore({
  userReducer: {
    user: storedData ? storedData.currentUser : { },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes currentUser={storedData ? storedData.currentUser : null} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
