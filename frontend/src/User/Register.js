import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
});

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: ''
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null
    };
  }

  render() {
    return (
      <div className={css(styles.centered, styles.background)}>
        <div className={css(styles.registerContainer, styles.centered)}>
          {this.state.errors && <h2>{this.state.errors}</h2>}
          <Formik
            initialValues={defaultValues}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              axios.post("/api/v1/register", values)
                .then(res => {
                  setSubmitting(false);
                })
                .catch(err => {
                  setSubmitting(false);
                  this.setState({
                    errors: "Server error."
                  });
                });
            }}
          >
            {({ dirty, touched, errors, isSubmitting }) => (
              <Form>
                <Field placeholder="Email" type="email" name="email" className={css(styles.input)} />
                <ErrorMessage name="email" component="div" />
                <Field placeholder="Password" type="password" name="password" className={css(styles.input)} />
                <ErrorMessage name="password" component="div" />
                <Field placeholder="Confirm Password"
                       type="password"
                       name="confirmPassword"
                       className={css(styles.input)} />
                <ErrorMessage name="confirmPassword" component="div" />
                <button type="submit"
                        className={css(styles.button)}
                        disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

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
