import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';

import {
  FormContent,
  FullView,
  FieldInput,
  FieldInputError,
  Heading,
  RegisterButton
} from './style';
import * as userApi from '../API/user';
import { requestLoginSuccess, clearLoginError } from './userActions';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required')
});

const defaultValues = {
  email: '',
  password: ''
};

class Login extends Component {
  static propTypes = {
    requestLoginSuccess: PropTypes.func.isRequired,
    clearLoginError: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: null
    };
  }

  componentWillReceiveProps = newProps => {
    let currentStatus = '';
    if (newProps.user) {
      if (newProps.user.error) {
        currentStatus = newProps.user.error;
      }
    }
    this.setState({ currentStatus });
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
                errors: err.response
                  ? err.response.data.message
                  : 'Server error.'
              });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ dirty, touched, errors, isSubmitting }) => (
            <FormContent>
              <Heading>Login</Heading>
              {errors.email && touched.email ? (
                <FieldInputError
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              ) : (
                <FieldInput placeholder="Email" type="email" name="email" />
              )}
              {errors.password && touched.password ? (
                <FieldInputError
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              ) : (
                <FieldInput
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              )}
              <RegisterButton
                type="submit"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Submit
              </RegisterButton>

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
