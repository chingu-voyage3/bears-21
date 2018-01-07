import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HouseForm} from '../../components/House';
import {
  houseFetchData, houseSaveData
} from './actions';

class House extends Component {
  componentWillMount = () => {
    this.setState( {new_house: this.props.house});
  };
  componentWillReceiveProps = (nextProps) => {
    this.setState( { new_house: nextProps.house});
  };
  houseFormSubmit = e => {
    console.log( "house form submit:", this.state.new_house);
    this.props.saveData( this.state.new_house);
  };
  onFieldChange = e => {
    const {new_house} = {...this.state};
    // check for location
    const re = /(.*)\.(.*)/;
    const m = e.target.name.match( re);
    if( m){
      new_house[m[1]][m[2]] = e.target.value;
    } else {
      new_house[e.target.name] = e.target.value;
    }
    this.setState( { new_house});
  };
  uploadImage = files => {
    console.log( "update image:", files[0]);
    // const data = new FormData();
    // data.append( 'img', files[0]);
    // console.log( "your file was (fake) uploaded"); // eslint-disable-line no-console
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
          <HouseForm house={this.state.new_house}
            onFieldChange={this.onFieldChange}
            onSubmit={this.houseFormSubmit}
            uploadImage={this.uploadImage} />
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
