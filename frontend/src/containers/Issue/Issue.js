import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {IssueForm} from '../../components/Issue'; // eslint-disable-line no-unused-vars
import {ImageBlock, ImageList} from '../../components/Image';
import {issueFetchData, issueSaveData, issueHasErrored, issueReset } from './actions';
import './style.css';

class Issue extends Component {
  static propTypes = {
    issue: PropTypes.object,
    isWorking: PropTypes.bool,
    hasErrored: PropTypes.bool,
    location: PropTypes.object,
    resetIssue: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired,
    setHasErrored: PropTypes.func.isRequired
  };
  state = {
    issue: {
      title: "",
      status: "open",
      priority: 2,
      type: "type a",
      description: "",
      images:[],
      house: null
    }
  };
  componentWillMount = () => {
    this.props.setHasErrored( false);
    if( this.props.location.state.issue) {
      this.setState( {issue: {...this.state.issue, ...this.props.location.state.issue}});
    } else {
      console.error( "Issue page received no params");
    }
  };
  componentWillReceiveProps = (nextProps) => {
    this.setState( {issue: {...nextProps.issue}})
  };
  issueFormSubmit = e => { // eslint-disable-line no-unused-vars
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
  removeImage = (ndx) => {
    const new_image_list = this.state.issue.images.filter( (img,i) => {
      return ndx !== i;
    });
    this.setState( {issue: {...this.state.issue, images: new_image_list}});
  };
  onNewIssue = () => {
    this.props.resetIssue( this.state.issue.house);
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
    const op_type = (typeof this.state.issue._id === "undefined")?"New":"Edit";

    return (
      <div className="wrapper">
        <h1 style={{textAlign:"center"}}>Issue ({op_type})</h1>
        <button type="button" onClick={this.onNewIssue} >New Issue</button>
        <div className="wrapper">
          <IssueForm issue={issue}
            onFieldChange={this.onFieldChange}
            onSubmit={this.issueFormSubmit} />
          <ImageBlock addImage={this.addImage} />
          <div className="images_wrapper">
            <ImageList images={issue.images} removeImage={this.removeImage} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issue: state.issue.issue,
    hasErrored: state.issue.issueHasErrored,
    isWorking: state.issue.issueIsWorking
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetIssue: house_id => dispatch( issueReset(house_id)),
    setHasErrored: err => dispatch( issueHasErrored(err)),
    fetchData: issue => dispatch( issueFetchData(issue)),
    saveData: issue => dispatch( issueSaveData(issue))
  }
};

export default connect( mapStateToProps, mapDispatchToProps)(Issue);
