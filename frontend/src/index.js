import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { initStore } from "./Redux/store";

import Routes from './Routes';
import './styles.css';
import { KEY } from './API/api';

const storedData = JSON.parse(localStorage.getItem(KEY));

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
