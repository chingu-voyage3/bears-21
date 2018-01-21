import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import IssueForm from './IssueForm';
import {ImageBlock, ImageList} from '../Image';
import {issueFetchData, issueSaveData, issueReset } from './actions';
import {StyleSheet, css} from 'aphrodite';

class Issue extends Component {
  static propTypes = {
    issue: PropTypes.object,
    isWorking: PropTypes.bool,
    hasErrored: PropTypes.bool,
    errorMessage: PropTypes.string,
    isSaved: PropTypes.bool,
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object,
    resetIssue: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired,
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
    const {match, location} = this.props;
    if( match.params.id === "new") {
      this.props.resetIssue( location.state.house_id);
    } else {
      this.setState( {issue: {...location.state.issue}});
    }
  };
  componentWillReceiveProps = (nextProps) => {
    this.setState( {issue: {...nextProps.issue}});
    if( nextProps.isSaved) {
      this.props.history.push( "/dashboard");
    }
  };
  issueFormSubmit = () => {
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
  removeImage = (src) => {
    const new_image_list = this.state.issue.images.filter( img => {
      let ret = true;
      if( typeof img === "string") {
        if( img === src) ret = false;
      } else {
        if( img.preview === src) ret = false;
      }
      return ret;
    });
    this.setState( {issue: {...this.state.issue, images: new_image_list}});
  };
  render() {
    const {hasErrored = false, isWorking = false, errorMessage = ""} = this.props;
    if( isWorking) {
      return (
        <div className={css(styles.wrapper)} >
          <p>Please wait ...</p>;
        </div>
      );
    }
    const {issue} = this.state;
    const op_type = (typeof this.state.issue._id === "undefined")?"New":"Edit";
    const show_error = {
      color: "tomato",
      display: hasErrored?"block":"none"
    };
    return (
      <div className={css(styles.wrapper)}>
        <h1>Issue ({op_type})</h1>
        <div style={show_error} >
          {errorMessage}
        </div>
        <IssueForm issue={issue}
          onFieldChange={this.onFieldChange}
          onSubmit={this.issueFormSubmit} />
        <ImageBlock addImage={this.addImage} />
        <ImageList images={issue.images||[]} removeImage={this.removeImage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issue: state.issue.issue,
    isWorking: state.issue.isWorking,
    isSaved: state.issue.isSaved,
    hasErrored: state.issue.issueError.hasErrored,
    errorMessage: state.issue.issueError.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetIssue: house_id => dispatch( issueReset(house_id)),
    fetchData: issue => dispatch( issueFetchData(issue)),
    saveData: issue => dispatch( issueSaveData(issue))
  }
};

export default connect( mapStateToProps, mapDispatchToProps)(Issue);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
