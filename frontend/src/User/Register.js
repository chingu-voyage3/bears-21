import React, { Component } from 'react';
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
      <FullView>
        {this.state.errors && <h2>{this.state.errors}</h2>}
        <Formik
          initialValues={defaultValues}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            this.setState({
              errors: null
            });
            try {
              await userApi.register(values);
              this.props.history.push('/login');
            } catch ({ response }) {
              this.setState({
                errors: response ? response.data.message : "Server error."
              });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ dirty, touched, errors, isSubmitting }) => (
            <FormContent>
              <FieldInput placeholder="Email" type="email" name="email"  />
              <ErrorMessage name="email" component="div" />
              <FieldInput placeholder="Password" type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <FieldInput placeholder="Confirm Password"
                     type="password"
                     name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
              <SubmitButton type="submit"
                            disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                Submit
              </SubmitButton>
            </FormContent>
          )}
        </Formik>
      </FullView>
    );
  }
}
