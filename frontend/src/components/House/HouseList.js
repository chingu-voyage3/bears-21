import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import House from './House';
import {FilteredIssueList} from '../Issue';
import {css} from 'aphrodite';
import styles from './styles';

export default class HouseList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired, // array of houses with issues
  };
  state = {
    redirect: null,
    edit_house: null
  };
  onNewIssue = house => {
    this.setState({redirect: house});
  };
  onEditHouse = house => {
    this.setState({edit_house: house});
  };
  render = () => {
    if( this.state.redirect){
      return <Redirect to={{
          pathname: "/issue",
          state: { issue: {house: this.state.redirect._id}}
        }}
      />;
    }
    if( this.state.edit_house) {
      return <Redirect to={{
          pathname: "/house",
          state: {house: this.state.edit_house}
        }}
      />;
    }
    const {data} = this.props;
    const house_list = data.map((house, ndx) => {
      return (
        <div className={css(styles.wrapper)} key={ndx}>
          <House house={house}
            onNewIssue={this.onNewIssue}
            onEditHouse={this.onEditHouse} />
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
  };
};
