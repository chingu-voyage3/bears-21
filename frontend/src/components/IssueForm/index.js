import React from 'react';
import {css} from 'aphrodite';
import styles from './styles.js';

export default class IssueForm extends React.Component {
  render() {
    const {issue} = this.props;
    return (
      <form action="" className={css(styles.form)} >
        <label className={css(styles.left_grid)}>Issue</label>
        <input className={css(styles.right_grid)} name="title" type="text"
          value={issue.title} onChange={this.props.onFieldChange} />

        <label className={css(styles.left_grid)}>Type</label>
        <select className={css(styles.right_grid)} name="type"
          value={issue.type} onChange={this.props.onFieldChange}>
          <option value="a">type a</option>
          <option value="b">type b</option>
        </select>

        <label className={css(styles.left_grid)}>Priority</label>
        <select className={css(styles.right_grid)} name="priority"
          value={issue.priority} onChange={this.props.onFieldChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label className={css(styles.left_grid)}>Status</label>
        <select className={css(styles.right_grid)} name="status"
          value={issue.status} onChange={this.props.onFieldChange}>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>

        <label>Description</label>
        <textarea name="description" rows="6" cols="32"
          value={issue.description} onChange={this.props.onFieldChange} />

        <button className={css(styles.right_grid)}
          onClick={this.props.onSubmit}
          type="button">
          Save
        </button>

      </form>
    );
  }
}
