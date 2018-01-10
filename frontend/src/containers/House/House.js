import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ImageBlock, ImageList} from '../../components/Image';
import {HouseForm} from '../../components/House';
import { houseHasErrored, houseFetchData, houseSaveData, resetHouse } from './actions';

class House extends Component {
  state = {
    house: {
      title: "Title",
      description: "Description",
      location: {
        street: "street",
        postCode: "post code"
      },
      images: [],
      issue: []
    }
  };
  componentWillMount = () => {
    console.log( "mounting house props:", this.props);
    this.props.setHasErrored( false);
    const {location} = this.props;
    if( location.state) {
      if( location.state.new_house) {
        console.log( "mounting house reset");
        this.props.resetHouse();
      } else if( location.state.house) {
        this.setState( {house: {
          ...this.state.house,
          ...this.props.location.state.house
        }});
      }
    }
  };
  componentWillReceiveProps = (nextProps) => {
    console.log( "receive props:", nextProps);
    this.setState( { house: nextProps.house});
  };
  // submit text data and pull out images that need uploading
  houseFormSubmit = e => {
    console.log( "house form submit:", this.state.house);
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
    console.log( "remove image index:", ndx);
    const ni = this.state.house.images.filter( (img,i) => {
      return ndx !== i;
    });
    console.log( "updated image count:", ni.length);
    this.setState( {house: {...this.state.house, images: ni}});
  };
  render = () => {
    const {hasErrored, isWorking} = this.props;
    if( hasErrored) {
      return <p>Sorry something went wrong</p>;
    }
    if( isWorking) {
      return <p>Please wait ...</p>;
    }
    const op_type = (typeof this.state.house._id === "undefined")?"New":"Edit";
    return (
      <div>
        <h1 style={{textAlign:"center"}}>House ({op_type})</h1>
        <div className="wrapper">
          <HouseForm house={this.state.house}
            onFieldChange={this.onFieldChange}
            onSubmit={this.houseFormSubmit} />
          <ImageBlock addImage={this.addImage} />
          <div className="images_wrapper">
            <ImageList images={this.state.house.images} removeImage={this.removeImage} />
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    house: state.house,
    isWorking: state.houseIsWorking,
    hasErrored: state.houseHasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetHouse: () => dispatch( resetHouse()),
    setHasErrored: (err) => dispatch( houseHasErrored(err)),
    fetchData: (url,house) => dispatch( houseFetchData( url, house)),
    saveData:  (url,house) => dispatch( houseSaveData( url, house))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(House);
