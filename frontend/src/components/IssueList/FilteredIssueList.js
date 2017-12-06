import React from 'react';
import IssueList from './IssueList';

export default (props) => {
  const {data, filter, title} = props;
  const filtered_list = data.filter( item => item.status === filter);
  return (
    <IssueList items={filtered_list} title={title} />
  );
};
