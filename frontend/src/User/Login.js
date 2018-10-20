import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';
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
      <div className={css(styles.centered, styles.background)}>
        <div className={css(styles.centered, styles.loginContainer)}>
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
                console.error(err);
                this.setState({
                  errors: err.response ? err.response.data.message : "Server error."
                });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ dirty, touched, errors, isSubmitting }) => (
              <Form>
                <Field placeholder="Email" type="email" name="email" className={css(styles.input)} />
                <ErrorMessage name="email" component="div" />
                <Field placeholder="Password" type="password" name="password" className={css(styles.input)} />
                <ErrorMessage name="password" component="div" />
                <button type="submit"
                        className={css(styles.button)}
                        disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>

          <Link className={css(styles.account)} to="/register">Create Account</Link>
          <Link className={css(styles.account)} to="/forgot">Recover Password</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLoginSuccess: payload => dispatch(requestLoginSuccess(payload)),
    clearLoginError: () => dispatch(clearLoginError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
  centered: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    resize: "none",
    fontSize: 18,
    padding: '10px 10px 10px 5px',
    marginTop: 10,
    border: "none",
    background: '#fafafa',
    borderRadius: 0,
    width: '100%',
    borderBottom: '1px solid #757575'
  },
  registerContainer: {
    background: '#fafafa',
    border: '1px solid #ebebeb',
    padding: '3em 2em 2em 2em',
    position: 'relative',
    width: 400,
    maxHeight: 430,
  },
  status: {
    width: 286,
    height: 25,
  },
  button: {
    padding: '12px 24px',
    margin: '.3em 0 1em 0',
    width: '100%',
    fontSize: 16,
    fontWeight: 400,
    background: "#FF5A5F",
    border: 0,
    borderRadius: 0,
    lineHeight: '20px',
    color: "white",
  },
  background: {
    backgroundColor: "#f0f0f0",
    padding: '5em 0',
  },
});
