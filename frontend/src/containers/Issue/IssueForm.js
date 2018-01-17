import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import styles from './styles.js';

export default class IssueForm extends React.Component {
  static propTypes = {
    issue: PropTypes.object.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  render() {
    const {issue, onFieldChange, onSubmit} = this.props;
    return (
      <form action="" className={css(styles.form)} >
        <label className={css(styles.left_grid)}>Issue</label>
        <input name="title" type="text" placeholder="Title"
          className={css(styles.right_grid)}
          value={issue.title} onChange={onFieldChange} />

        <label className={css(styles.left_grid)}>Type</label>
        <select className={css(styles.right_grid)} name="type"
          value={issue.type} onChange={onFieldChange}>
          <option value="a">type a</option>
          <option value="b">type b</option>
        </select>

        <label className={css(styles.left_grid)}>Priority</label>
        <select className={css(styles.right_grid)} name="priority"
          value={issue.priority} onChange={onFieldChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label className={css(styles.left_grid)}>Status</label>
        <select className={css(styles.right_grid)} name="status"
          value={issue.status} onChange={onFieldChange}>
          <option value="open">Open</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>

        <label>Description</label>
        <textarea name="description" rows="6" cols="32" placeholder="Description"
          value={issue.description} onChange={onFieldChange} />

        <button className={css(styles.right_grid)}
          onClick={onSubmit}
          type="button">
          Save
        </button>

      </form>
    );
  }
}
