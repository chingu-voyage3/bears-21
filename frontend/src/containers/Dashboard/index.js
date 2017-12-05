import React from 'react';
import House from '../../components/House';
import './style.css';

export default class Dashboard extends React.Component {
  render = () => {
    const image_src = "//via.placeholder.com/200x200";
    return (
      <div>
        <h1>Dashboard</h1>
        <div className="wrapper">
          <House src={image_src} />
          <div className="column_wrapper">
            <div>
              Open Issues
            </div>
            <ul>
              <li className="issue_style">issue 1</li>
            </ul>
          </div>
          <div className="column_wrapper">
            <div>
              Resolved Issues
            </div>
            <ul>
              <li className="issue_style">issue 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
};
