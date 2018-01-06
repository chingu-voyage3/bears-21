import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { changePostCode, loadHouses } from './actions';

export class MainPage extends PureComponent { // eslint-disable-line react/prefer-stateless-functio
  render () {
    return (
      <div className={css(styles.container)}>
        <form onSubmit={this.props.onSubmitForm} className={css(styles.form)} noValidate>
          <input type="search" placeholder="Enter Postcode" onChange={this.props.onChangePostCode} className={css(styles.formInput)} />
          <input type="submit" value="Search" className={css(styles.formSubmit)} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangePostCode: (evt) => dispatch(changePostCode(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadHouses());
  },
});

const mapStateToProps = (state) => ({
  postCode: state.postCode,
  hasError: state.hasError
});

const styles = StyleSheet.create({
  container: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    border: '20px solid rgba(0,0,0,0.3)',
    borderRadius: '5px'
  },
  formInput: {
    border: '0',
    padding: '10px',
    background: 'white',
    lineHeight: '50px',
    fontSize: '20px',
    borderRadius: '0',
    outline: '0',
    borderRight: '1px solid rgba(0,0,0,0.2)'
  },
  formSubmit: {
    border: '0',
    padding: '10px',
    lineHeight: '50px',
    fontSize: '20px',
    borderRadius: '0',
    outline: '0',
    borderRight: '1px solid rgba(0,0,0,0.2)',
    background: '#FF5A5F',
    borderTop: '1px solid #FF5A5F',
    borderBottom: '1px solid #FF5A5F',
    color: 'white',
    flexBasis: '500px'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
