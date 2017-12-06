import React from 'react';
import IssueList from './IssueList';
import './style.css';

export default (props) => {
  const {data, filter, title} = props;
  const filtered_list = data
                        .filter( item => item.status === filter)
                        .map( (item, i) => (
                          <li className="issue_style" key={i}>
                            {item.title}
                          </li>
                        ));
  return (
    <IssueList items={filtered_list} title={title} />
  );
};
