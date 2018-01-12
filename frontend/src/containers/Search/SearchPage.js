import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
//import SearchInput from './SearchInput';
import SubmitInput from './SubmitInput';
import Form from './Form';

export default class SearchPage extends Component {
  getInputValue = () => {
    return this.refs.input.value;
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    const postCode = this.getInputValue();
    this.props.history.push(`search?postCode=${postCode}`);
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

const styles = StyleSheet.create({
  container: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('http://lorempixel.com/1000/600/abstract')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'scroll',
    marginTop: '0'
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
