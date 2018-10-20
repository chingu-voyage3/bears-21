import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';

import {
  FormContent,
  FullView,
  FieldInput,
  SubmitButton
} from './style';
import * as userApi from '../API/user';
import { requestLoginSuccess, clearLoginError } from './userActions';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const defaultValues = {
  email: '',
  password: '',
};

class Login extends Component {
  static propTypes = {
    requestLoginSuccess: PropTypes.func.isRequired,
    clearLoginError: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: null,
    };
  }

  componentWillReceiveProps = newProps => {
    let currentStatus = "";
    if(newProps.user) {
      if(newProps.user.error) {
        currentStatus = newProps.user.error;
      }
    }
    this.setState({currentStatus})
  };

  render() {
    return (
      <FullView>
        {this.state.errors && <h2>{this.state.errors}</h2>}
        <Formik
          initialValues={defaultValues}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            this.setState({
              errors: null
            });
            try {
              const user = await userApi.login(values);
              this.props.requestLoginSuccess(user);
              this.props.history.push('/dashboard');
            } catch (err) {
              this.setState({
                errors: err.response ? err.response.data.message : "Server error."
              });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ dirty, touched, errors, isSubmitting }) => (
            <FormContent>
              <FieldInput placeholder="Email" type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <FieldInput placeholder="Password" type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <SubmitButton type="submit"
                            disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                Submit
              </SubmitButton>

              <Link to="/register">Create Account</Link>
              <Link to="/forgot">Recover Password</Link>
            </FormContent>
          )}
        </Formik>
      </FullView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
  requestLoginSuccess: payload => dispatch(requestLoginSuccess(payload)),
  clearLoginError: () => dispatch(clearLoginError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
