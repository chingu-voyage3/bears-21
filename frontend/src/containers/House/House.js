import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ImageBlock, ImageList} from '../../components/Image';
import {HouseForm} from '../../components/House';
import { houseFetchData, houseSaveData, houseReset } from './actions';

class House extends Component {
  static propTypes = {
    house: PropTypes.object,
    isWorking: PropTypes.bool,
    isSaved: PropTypes.bool,
    hasErrored: PropTypes.bool,
    location: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object,
    errorMessage: PropTypes.string,
    saveData: PropTypes.func.isRequired
  };
  state = {
    house: {
      title: "",
      description: "",
      location: {
        street: "",
        postCode: ""
      },
      images: [],
      issue: []
    },
    redirect_issue: null
  };
  componentWillMount = () => {
    const {match, location} = this.props;
    this.props.resetData();
    if( match.params.id !== "new") {
      this.setState( {house: location.state.house})
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if( nextProps.isSaved) {
      this.props.history.push("/dashboard");
    }
  };

  houseFormSubmit = e => { // eslint-disable-line no-unused-vars
    this.props.saveData( this.state.house);
  };

  onFieldChange = e => {
    const {house} = {...this.state};
    // check for location and handle sub objects {street,postCode}
    const re = /(.*)\.(.*)/;
    const m = e.target.name.match( re);
    if( m){
      house[m[1]][m[2]] = e.target.value;
    } else {
      house[e.target.name] = e.target.value;
    }
    this.setState( { house});
  };
  addImage = ( image) => {
    const {house} = this.state;
    this.setState( {house: {...house, images: house.images.concat([image])}});
  };
  removeImage = (ndx) => {
    const ni = this.state.house.images.filter( (img,i) => {
      return ndx !== i;
    });
    this.setState( {house: {...this.state.house, images: ni}});
  };
  render = () => {
    const {house} = this.state;
    const {isWorking = true, hasErrored = false, errorMessage = ""} = this.props;
    if( isWorking) {
      return <p>Please wait ...</p>;
    }
    const op_type = (typeof house._id === "undefined")?"New":"Edit";
    const show_error = {
      color: "tomato",
      display: hasErrored?"block":"none"
    };
    return (
      <div className="container_vertical">
        <h1 style={{textAlign:"center"}}>House ({op_type})</h1>
        <div style={show_error} >
          {errorMessage}
        </div>
        <div className="wrapper">
          <HouseForm house={house}
            onFieldChange={this.onFieldChange}
            onSubmit={this.houseFormSubmit} />
          <ImageBlock addImage={this.addImage} />
          <div className="images_wrapper">
            <ImageList images={house.images} removeImage={this.removeImage} />
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    house: state.house.house,
    isSaved: state.house.houseIsSaved,
    isWorking: state.house.houseIsWorking,
    hasErrored: state.house.houseError.hasErrored,
    errorMessage: state.house.houseError.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetData: () => dispatch( houseReset()),
    fetchData: (url,house) => dispatch( houseFetchData( url, house)),
    saveData:  (url,house) => dispatch( houseSaveData( url, house))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(House);
