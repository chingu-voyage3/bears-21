import React from 'react';
import {css} from 'aphrodite';
import styles from './style.css';

export default class IssueForm extends React.Component {
  render() {
    const {issue} = this.props;
    return (
      <form action="" className={css(styles.form)} >
        <label className={css(styles.left_grid)}>Issue</label>
        <input className={css(styles.right_grid)} name="name" type="text"
          value={issue.name} onChange={this.props.onFieldChange} />

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
