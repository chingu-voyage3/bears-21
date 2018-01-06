import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { changePostCode, loadHouses } from './actions';
import SearchInput from './SearchInput';
import SubmitInput from './SubmitInput';
import Form from './Form';

export class MainPage extends PureComponent { // eslint-disable-line react/prefer-stateless-functio
  render () {
    return (
      <div className={css(styles.container)}>
        <Form onSubmit={this.props.onSubmitForm}>
          <SearchInput placeholder="Enter Postcode" onChange={this.props.onChangePostCode} required />
          <SubmitInput />
        </Form>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
