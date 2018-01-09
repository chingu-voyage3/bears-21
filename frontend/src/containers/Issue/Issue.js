import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {IssueForm} from '../../components/Issue'; // eslint-disable-line no-unused-vars
import {UploadImages} from '../../components/Uploader';
import {ImageBlock} from '../../components/Image';
import {issueFetchData, issueSaveData } from './actions';
import './style.css';

class Issue extends Component {
  componentWillMount = () => {
    console.log( "issue page props:", this.props);
    // set default
    if( this.props.location.state.issue) {
      const defaultIssue = {
        title: "Title",
        status: "open",
        priority: 2,
        type: "type a",
        description: "Description",
        images:[],
        house: null
      };

      this.setState( {issue: {...defaultIssue, ...this.props.location.state.issue}});
    } else {
      console.error( "Issue page received no route params");
    }
  };
  componentWillReceiveProps = (nextProps) => {
    console.log( "component will receive props:", nextProps);
    this.setState( {issue: {...nextProps.issue}})
  };
  issueFormSubmit = e => {
    console.log( "issue form submit issue:", this.state.issue);
    this.props.saveData( this.state.issue);
  };
  onFieldChange = e => {
    const {issue} = {...this.state};
    issue[e.target.name] = e.target.value;
    this.setState( { issue});
  };
  addImage = ( image) => {
    const {issue} = this.state;
    this.setState( {issue: {...issue, images: issue.images.concat([image])}});
  };
  onRemoveImage = (ndx) => {
    console.log( "remove image index:", ndx);
    const new_image_list = this.state.issue.images.filter( (img,i) => {
      return ndx !== i;
    });
    const issue = {...this.state.issue};
    issue.images = new_image_list;
    this.setState( {issue});
  };
  onUploadImages = () => {
    console.log( "files to upload:", this.state.images);
    this.state.issue.images.forEach( (img, i) => {
      console.log( `file [${i}] is a ${typeof img}`);
    });
    UploadImages( this.props.parent_id, this.state.issue.images);
  };
  render() {
    const {hasErrored, isWorking} = this.props;
    if( hasErrored) {
      return <p>Sorry something went wrong</p>;
    }
    if( isWorking) {
      return <p>Please wait ...</p>;
    }
    const {issue} = this.state;
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Issue (view/edit/create)</h1>
        <div className="wrapper">
          <IssueForm issue={issue}
            onFieldChange={this.onFieldChange}
            onSubmit={this.issueFormSubmit} />
          <ImageBlock images={issue.images}
            addImage={this.addImage}
            removeImage={this.removeImage}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issue: state.issue,
    hasErrored: state.issueHasErrored,
    isWorking: state.issueIsWorking
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: issue => dispatch( issueFetchData(issue)),
    saveData: issue => dispatch( issueSaveData(issue))
  }
};

export default connect( mapStateToProps, mapDispatchToProps)(Issue);
