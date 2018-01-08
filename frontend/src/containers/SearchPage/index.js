import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import SearchInput from './SearchInput';
import SubmitInput from './SubmitInput';
import Form from './Form';

export default class SearchPage extends Component {
  getInputValue = () => {
    return this.refs.input.value;
  }

  handleSubmit = () => {
    const postCode = this.getInputValue();
    this.props.history.push(`houses/${postCode}`);
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  render () {
    return (
      <div className={css(styles.container)}>
        <Form onSubmit={this.handleSubmit}>
          <input type="search"
                 className={css(styles.input)}
                 placeholder="Enter Postcode"
                 ref="input" onKeyUp={this.handleKeyUp} required />
          <SubmitInput />
        </Form>
      </div>
    );
  }
}

/*
const mapDispatchToProps = (dispatch) => ({
  onChangePostCode: (evt) => dispatch(changePostCode(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadHouses());
  },
});
*/

/*
const mapStateToProps = (state) => ({
  postCode: state.postCode,
  hasError: state.hasError
});
*/

const styles = StyleSheet.create({
  container: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('http://lorempixel.com/1000/600/abstract')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  input: {
    border: '0',
    padding: '10px',
    background: 'white',
    lineHeight: '50px',
    fontSize: '20px',
    borderRadius: '0',
    outline: '0',
    borderRight: '1px solid rgba(0,0,0,0.2)'
  }
});
