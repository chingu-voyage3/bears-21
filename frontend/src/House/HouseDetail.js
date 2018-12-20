import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImageList } from '../Image';
import HouseForm from './HouseForm';
import { houseFetchData, houseSaveData, houseReset } from './actions';
import styled, { css } from 'styled-components';

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
    resetData: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired
  };
  state = {
    house: {
      title: '',
      description: '',
      location: {
        street: '',
        postCode: ''
      },
      images: [],
      issue: []
    },
    redirect_issue: null
  };
  componentWillMount = () => {
    const { match, location } = this.props;
    this.props.resetData();
    if (match.params.id !== 'new') {
      this.setState({ house: location.state.house });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.isSaved) {
      this.props.history.push('/dashboard');
    }
  };

  houseFormSubmit = () => {
    this.props.saveData(this.state.house);
  };

  onFieldChange = e => {
    const { house } = { ...this.state };
    // check for location and handle sub objects {street,postCode}
    const re = /(.*)\.(.*)/;
    const m = e.target.name.match(re);
    if (m) {
      house[m[1]][m[2]] = e.target.value;
    } else {
      house[e.target.name] = e.target.value;
    }
    this.setState({ house });
  };
  addImage = image => {
    const { house } = this.state;
    this.setState({
      house: { ...house, images: house.images.concat([image]) }
    });
  };
  removeImage = src => {
    const ni = this.state.house.images.filter(img => {
      let ret = true;
      if (typeof img === 'string') {
        if (img === src) ret = false;
      } else {
        if (img.preview === src) ret = false;
      }
      return ret;
    });
    this.setState({ house: { ...this.state.house, images: ni } });
  };
  render = () => {
    const { house } = this.state;
    const {
      isWorking = false,
      hasErrored = false,
      errorMessage = ''
    } = this.props;
    if (isWorking) {
      return <p>Please wait ...</p>;
    }
    return (
      <Centered>
        <h1>House (View)</h1>
        <ErrorMessage hasErrored={hasErrored}>{errorMessage}</ErrorMessage>
        <HouseForm house={house} />
        <ImageList images={house.images} />
      </Centered>
    );
  };
}

const Centered = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: tomato;
  display: none;

  ${props =>
    props.hasErrored &&
    css`
      display: block;
    `};
`;

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
    resetData: () => dispatch(houseReset()),
    fetchData: (url, house) => dispatch(houseFetchData(url, house)),
    saveData: (url, house) => dispatch(houseSaveData(url, house))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(House);
