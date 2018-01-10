import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import House from './House';
import {FilteredIssueList} from '../Issue';
import {css} from 'aphrodite';
import styles from './styles';

export default class HouseList extends Component {
  state = {
    redirect: null
  };

  onNewIssue = (house) => {
    this.setState( {redirect: house});
  }

  render = () => {
    if(this.state.redirect) {
      return <Redirect to={{
          pathname: "/issue",
          state: { issue: {house: this.state.redirect._id}}
        }}
      />;
    }
    const { data } = this.props;
    const house_list = data.map((house, ndx) => {
      return (
        <div className={css(styles.wrapper)} key={ndx}>
          <House data={house} onNewIssue={this.onNewIssue} />
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
