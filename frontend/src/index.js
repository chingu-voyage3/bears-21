import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Redux";
import { Entrypoint } from './Entrypoint';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Entrypoint />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
