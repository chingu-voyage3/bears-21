import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class IssueForm extends React.Component {
  static propTypes = {
    issue: PropTypes.object.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  render() {
    const { issue, onFieldChange, onSubmit } = this.props;
    return (
      <form action="" className={css(styles.form)}>
        <label className={css(styles.left_grid)}>Issue</label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className={css(styles.right_grid)}
          value={issue.title}
          onChange={onFieldChange}
        />

        <label className={css(styles.left_grid)}>Type</label>
        <select
          className={css([styles.right_grid, styles.select_style])}
          name="type"
          value={issue.type}
          onChange={onFieldChange}
        >
          <option value="a">type a</option>
          <option value="b">type b</option>
        </select>

        <label className={css(styles.left_grid)}>Priority</label>
        <select
          className={css([styles.right_grid, styles.select_style])}
          name="priority"
          value={issue.priority}
          onChange={onFieldChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label className={css(styles.left_grid)}>Status</label>
        <select
          className={css([styles.right_grid, styles.select_style])}
          name="status"
          value={issue.status}
          onChange={onFieldChange}
        >
          <option value="open">Open</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>

        <label className={css(styles.left_grid)}>Description</label>
        <textarea
          name="description"
          rows="6"
          cols="32"
          placeholder="Description"
          value={issue.description}
          onChange={onFieldChange}
        />

        <button
          className={css(styles.right_grid)}
          onClick={onSubmit}
          type="button"
        >
          Save
        </button>
      </form>
    );
  }
}

const styles = StyleSheet.create({
  select_style: {
    width: '120px',
    height: '2em',
    borderRadius: '3px',
    overflow: 'hidden',
    background: 'white'
  },
  title: {
    textAlign: 'center'
  },
  form: {
    margin: '10px auto',
    maxWidth: '600px',
    display: 'grid',
    alignItems: 'baseline',
    gridTemplateColumns: '100px 1fr',
    gridGap: '8px'
  },
  left_grid: {
    lineHeight: '1.5em',
    textAlign: 'right',
    gridColumn: '1 / 2'
  },
  right_grid: {
    gridColumn: '2/3'
  }
});
