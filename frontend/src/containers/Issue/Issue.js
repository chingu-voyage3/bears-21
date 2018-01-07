import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {IssueForm} from '../../components/Issue'; // eslint-disable-line no-unused-vars
import Uploader from '../../components/Uploader';
import {issueFetchData, issueSaveData } from './actions';
import './style.css';

class Issue extends Component {
  state = {
    uploader_visible: false
  };
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
    const {hasErrored, isWorking} = this.props;
    if( hasErrored) {
      return <p>Sorry something went wrong</p>;
    }
    if( isWorking) {
      return <p>Please wait ...</p>;
    }
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
