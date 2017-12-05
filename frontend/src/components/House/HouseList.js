import React from 'react';
import House from './House';
import {FilteredIssueList} from '../IssueList';
import './style.css';

export default class HouseList extends React.Component {
  render = () => {
    const {data} = this.props;
    const house_list = data.map( (house, ndx) => {
      return (
        <div className="wrapper" key={ndx}>
          <House src={house.house_image} />
          <FilteredIssueList data={house.issues} filter="open" title="Open Issues" />
          <FilteredIssueList data={house.issues} filter="resolved" title="Resolved Issues" />
        </div>
      );
    });
    return (
      <div className="list">
        {house_list}
      </div>
    );
  };
};
