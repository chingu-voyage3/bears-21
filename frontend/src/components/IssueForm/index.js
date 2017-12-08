import React from 'react';
import './style.css';

export default class IssueForm extends React.Component {
  render() {
    const {issue} = this.props;
    return (
      <form action="">
        <label>Issue</label>
        <input name="name" type="text"
          value={issue.name} onChange={this.props.onFieldChange} />

        <label>Type</label>
        <select name="type"
          value={issue.type} onChange={this.props.onFieldChange}>
          <option value="a">type a</option>
          <option value="b">type b</option>
        </select>

        <label>Priority</label>
        <select name="priority"
          value={issue.priority} onChange={this.props.onFieldChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label>Description</label>
        <textarea name="description" rows="6" cols="32"
          value={issue.description} onChange={this.props.onFieldChange} />

        <button type="button" onClick={this.props.onSubmit} >Save</button>

      </form>
    );
  }
}
