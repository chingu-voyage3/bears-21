import React from 'react';
import IssueList from './IssueList';

export default (props) => {
  const {data, statusFilter, title} = props;
  const filtered_list = data.filter( item => item.status === statusFilter);
  return (
    <IssueList items={filtered_list} title={title} />
  );
};
