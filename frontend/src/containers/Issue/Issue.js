import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {IssueForm} from '../../components/Issue'; // eslint-disable-line no-unused-vars
import {ImageBlock, ImageList} from '../../components/Image';
import {issueFetchData, issueSaveData, issueHasErrored, issueReset } from './actions';
import './style.css';

class Issue extends Component {
  state = {
    issue: {
      title: "Title",
      status: "open",
      priority: 2,
      type: "type a",
      description: "Description",
      images:[],
      house: null
    }
  };
  componentWillMount = () => {
    console.log( "mounting issue props:", this.props);
    this.props.setHasErrored( false);
    if( this.props.location.state.issue) {
      this.setState( {issue: {...this.state.issue, ...this.props.location.state.issue}});
    } else {
      console.error( "Issue page received no params");
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
  removeImage = (ndx) => {
    console.log( "remove image index:", ndx);
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
    issue: state.issue,
    hasErrored: state.issueHasErrored,
    isWorking: state.issueIsWorking
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetIssue: (house_id) => dispatch( issueReset(house_id)),
    setHasErrored: (err) => dispatch( issueHasErrored(err)),
    fetchData: issue => dispatch( issueFetchData(issue)),
    saveData: issue => dispatch( issueSaveData(issue))
  }
};

export default connect( mapStateToProps, mapDispatchToProps)(Issue);
