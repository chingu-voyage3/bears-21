import React from 'react';
import House from './House';
import {FilteredIssueList} from '../IssueList';
import {css} from 'aphrodite';
import S from './styles';

export default class HouseList extends React.Component {
  render = () => {
    const {data} = this.props;
    const house_list = data.map( (house, ndx) => {
      return (
        <div className={css(S.wrapper)} key={ndx}>
          <House src={house.house_image} />
          <FilteredIssueList data={house.issues} filter="open" title="Open Issues" />
          <FilteredIssueList data={house.issues} filter="resolved" title="Resolved Issues" />
        </div>
      );
    });
    return (
      <div className={css(S.list)}>
        {house_list}
      </div>
    );
  };
};
