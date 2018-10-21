import React, { Component } from 'react';
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
  RegisterButton,
  StyledSelect
} from './style';
import * as userApi from '../API/user';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email Required'),
  password: Yup.string()
    .required('Password Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm Password Required'),
});

const options = [
  { value: 'agency', label: 'Agency'},
  { value: 'tenant', label: 'Tenant'},
  { value: 'owner', label: 'Owner'},
];

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
  option: 'Tenant'
};

export default class Register extends Component {
  state = {
    errors: null
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
              <Heading>Register</Heading>
              {
                errors.email && touched.email
                ? <FieldInputError placeholder="Email" type="email" name="email" />
                : <FieldInput placeholder="Email" type="email" name="email" />
              }
              {
                errors.password && touched.password
                ? <FieldInputError placeholder="Password" type="password" name="password" />
                : <FieldInput placeholder="Password" type="password" name="password" />
              }
              {
                errors.confirmPassword && touched.confirmPassword
                ? <FieldInputError placeholder="Confirm Password" type="password" name="confirmPassword" />
                : <FieldInput placeholder="Confirm Password" type="password" name="confirmPassword" />
              }
              <StyledSelect
                id="option"
                defaultValue={options[0]}
                options={options}
              />
              {
                errors.email && touched.email && <span>{ errors.email }</span>
              }
              {
                errors.password && touched.password && <span>{ errors.password }</span>
              }
              {
                errors.confirmPassword && touched.confirmPassword && <span>{ errors.confirmPassword }</span>
              }
              <RegisterButton
                  type="submit"
                  disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                Submit
              </RegisterButton>
              <Link to="/login">Login</Link>
            </FormContent>
          )}
        </Formik>
      </FullView>
    );
  }
}
