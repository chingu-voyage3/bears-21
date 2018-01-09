import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UploadImages} from '../../components/Uploader';
import {ImageBlock} from '../../components/Image';
import {HouseForm} from '../../components/House';
import { houseFetchData, houseSaveData } from './actions';

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
    this.blob_images = [];
  };
  componentWillReceiveProps = (nextProps) => {
    this.setState( { house: nextProps.house});
    if( nextProps.house._id && this.blob_images.length > 0 ) {
      const blobs = this.blob_images.slice();
      this.blob_images = [];
      console.log( `house [${nextProps.house._id}] `+
        `uploading blob images, count[${blobs.length}]`);
      UploadImages( "house", nextProps.house._id, blobs)
      .then( response => {
        console.log( "image upload response:", response);
        return response.json();
      })
      .then( json => {
        console.log( "upload response json:", json);
      })
      .catch( err => {
        console.log( "image upload failed:", err);
      });
    }
  };
  // submit text data and pull out images that need uploading
  houseFormSubmit = e => {
    console.log( "house form submit:", this.state.house);
    let url_images = [];
    this.blob_images = [];
    this.state.house.images.forEach( (img) => {
      if( typeof img === "string") {
        url_images.push( img);
      } else {
        this.blob_images.push( img);
      }
    });
    const house = {...this.state.house, images: url_images};
    this.props.saveData( house);
  };
  onFieldChange = e => {
    const {house} = {...this.state};
    // check for location
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
    const house = {...this.state.house};
    this.setState( {house: {...house, images: house.images.concat([image])}});
  };
  onRemoveImage = (ndx) => {
    console.log( "remove image index:", ndx);
    const ni = this.state.images.filter( (img,i) => {
      return ndx !== i;
    });
    console.log( "updated image count:", ni.length);
    this.setState( {images: ni});
  };
  render = () => {
    const {hasErrored, isWorking} = this.props;
    if( hasErrored) {
      return <p>Sorry something went wrong</p>;
    }
    if( isWorking) {
      return <p>Please wait ...</p>;
    }
    return (
      <div>
        <h1 style={{textAlign:"center"}}>House (New/Edit)</h1>
        <div className="wrapper">
          <HouseForm house={this.state.house}
            onFieldChange={this.onFieldChange}
            onSubmit={this.houseFormSubmit}
            uploadImage={this.uploadImage} />
          <ImageBlock images={this.state.house.images}
            addImage={this.addImage}
            removeImage={this.removeImage}
          />
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
    fetchData: (url,house) => dispatch( houseFetchData( url, house)),
    saveData:  (url,house) => dispatch( houseSaveData( url, house))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(House);
