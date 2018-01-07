import React, {Component} from 'react';
import House from './House';
import {FilteredIssueList} from '../IssueList';
import {css} from 'aphrodite';
import styles from './styles';

export default class HouseList extends Component {
  render = () => {
    const {data} = this.props;
    const house_list = data.map( (house, ndx) => {
      return (
        <div className={css(styles.wrapper)} key={ndx}>
          <House src={house.house_image} />
          <FilteredIssueList data={house.issues} statusFilter="open" title="Open Issues" />
          <FilteredIssueList data={house.issues} statusFilter="resolved" title="Resolved Issues" />
        </div>
      );
    });
    return (
      <div className={css(styles.list)}>
        {house_list}
      </div>
    );
  }
}
