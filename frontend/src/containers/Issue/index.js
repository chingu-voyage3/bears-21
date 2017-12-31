import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import IssueForm from '../../components/IssueForm'; // eslint-disable-line no-unused-vars
import Uploader from '../../components/Uploader';
import {getIssue} from './actions';
import './style.css';

export default class Issue extends Component {
  state = {
    issue: {_id:0},
    uploader_visible: false
  };
  componentWillMount = () => {
    getIssue()
    .then( response => {
      this.setState( { issue: response});
    })
    .catch( err => {
      console.error( "getIssue failed:", err); // eslint-disable-line no-console
    });
  };
  issueFormSubmit = e => {
    console.log( "issue form submit issue:", this.state.issue);
  };
  onFieldChange = e => {
    console.log( "field changed:", e.target.name, e.target.value);
    const {issue} = this.state;
    issue[e.target.name] = e.target.value;
    this.setState( { issue});
  };
  toggleUploaderViz = () => {
    this.setState( { uploader_visible: !this.state.uploader_visible});
  };

  uploadImage = files => {
    console.log( "update image:", files[0]);
    // const data = new FormData();
    // data.append( 'img', files[0]);
    // console.log( "your file was (fake) uploaded"); // eslint-disable-line no-console
  };
  render() {
    if( this.state.issue._id === 0) return null;
    const {issue} = this.state;
    const show_uploader = {
      display: this.state.uploader_visible&&issue._id?"flex":"none"
    }
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Issue (view/edit/create)</h1>
        <div className="wrapper">
          <IssueForm issue={issue}
            onFieldChange={this.onFieldChange}
            onSubmit={this.issueFormSubmit} />
          <div className="image_title">
            Images <button onClick={this.toggleUploaderViz} >+</button>
          </div>
          <div className="upload_wrapper" style={show_uploader} >
            <Uploader onFileDropped={this.uploadImage}/>
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
