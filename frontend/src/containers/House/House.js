import React, {Component} from 'react';
import HouseForm from '../../components/House';
import Uploader from '../components/Uploader';

class House extends Component {

  houseFormSubmit = e => {
    console.log( "issue form submit issue:", this.state.house);
  };
  onFieldChange = e => {
    // console.log( "field changed:", e.target.name, e.target.value);
    const {house} = {...this.state.house};
    house[e.target.name] = e.target.value;
    dispatch( houseUpdated(house));
    // this.setState( { issue});
  };
  uploadImage = files => {
    console.log( "update image:", files[0]);
    // const data = new FormData();
    // data.append( 'img', files[0]);
    // console.log( "your file was (fake) uploaded"); // eslint-disable-line no-console
  };

  render = () => {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Issue (view/edit/create)</h1>
        <div className="wrapper">
          <HouseForm house={this.props.house}
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
    isWorking: status.houseIsWorking,
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
