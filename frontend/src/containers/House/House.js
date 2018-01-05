import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HouseForm} from '../../components/House';
import {
  houseUpdated,
  houseFetchData, houseSaveData
} from './actions';

class House extends Component {
  houseFormSubmit = e => {
    console.log( "house form submit:", this.props.house);
  };
  onFieldChange = e => {
    // console.log( "field changed:", e.target.name, e.target.value);
    const {house} = {...this.props.house};
    house[e.target.name] = e.target.value;
    this.props.updateData(house);
    // this.setState( { issue});
  };
  uploadImage = files => {
    console.log( "update image:", files[0]);
    // const data = new FormData();
    // data.append( 'img', files[0]);
    // console.log( "your file was (fake) uploaded"); // eslint-disable-line no-console
  };

  render = () => {
    const {hasErrored, isWorking, house} = this.props;
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
          <HouseForm house={house}
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
    saveData:  (url,house) => dispatch( houseSaveData( url, house)),
    updateData: house => dispatch( houseUpdated(house))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(House);
