import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import IssueForm from '../../components/IssueForm'; // eslint-disable-line no-unused-vars
import {getIssue} from './actions';
import './style.css';

export default class Issue extends Component {
  state = {
    issue: {_id:0}
  };
  componentWillMount = () => {
    getIssue()
    .then( (response) => {
      this.setState( { issue: response});
    })
    .catch( (err) => {
      console.error( "getIssue failed:", err); // eslint-disable-line no-console
    });
  };
  issueFormSubmit = (e) => {
    console.log( "issue form submit issue:", this.state.issue);
  };
  onFieldChange = (e) => {
    console.log( "field changed:", e.target.name, e.target.value);
    const {issue} = this.state;
    issue[e.target.name] = e.target.value;
    this.setState( { issue});
  };
  render() {
    if( this.state.issue._id === 0) return null;
    const {issue} = this.state;
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Issue (view/edit/create)</h1>
        <div className="wrapper">
          <IssueForm issue={issue} onFieldChange={this.onFieldChange} onSubmit={this.issueFormSubmit} />
          <h2>Images</h2>
          <div className="upload_wrapper">
            <input name="myfile" type="file" />
            <input type="submit" value="Submit" />
          </div>
          <div className="images_wrapper">
            <div id="image_list" >
              {issue.images.map( (img, ndx) => <img key={ndx} src={img} alt="noimg"/>)}
            </div>
          </div>

        </div>
      </div>
    );
  }
}
