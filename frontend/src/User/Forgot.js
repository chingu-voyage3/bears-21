import React, { PureComponent } from 'react';
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

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const defaultValues = {
  email: ''
};

export default class Forgot extends PureComponent {
  state = {
    email: '',
    errors: null
  };

  onCancelClick = () => {
    this.props.history.push('/');
  };

  render = () => {
    return (
      <FullView>
        <Formik
          initialValues={defaultValues}
          validationSchema={RegisterSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            this.setState({ errors: null });
            try {
              await userApi.forgotPassword(values);
            } catch ({ response }) {
              this.setState({
                errors: response ? response.data.message : 'Server error.'
              });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ dirty, touched, errors, isSubmitting }) => (
            <FormContent>
              <Heading>Forgot Password?</Heading>
              {errors.email && touched.email ? (
                <FieldInputError
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              ) : (
                <FieldInput placeholder="Email" type="email" name="email" />
              )}
              <RegisterButton
                type="submit"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Submit
              </RegisterButton>
            </FormContent>
          )}
        </Formik>
      </FullView>
    );
  };
}
