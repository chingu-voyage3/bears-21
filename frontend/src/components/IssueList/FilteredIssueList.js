import React from 'react';
import IssueList from './IssueList';
import {css} from 'aphrodite';
import S from './styles';

export default (props) => {
  const {data, filter, title} = props;
  const filtered_list = data
                        .filter( item => item.status === filter)
                        .map( (item, i) => (
                          <li className={css(S.issue_style)} key={i}>
                            {item.title}
                          </li>
                        ));
  return (
    <IssueList items={filtered_list} title={title} />
  );
};
