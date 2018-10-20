import React, { PureComponent } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';

import {
  Button,
  TextButton,
  ButtonRow,
  FormContent,
  FullView,
  FieldInput
} from './style';
import * as userApi from '../API/user';


const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const defaultValues = {
  email: '',
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
                errors: response ? response.data.message : "Server error."
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
              <ButtonRow>
                <TextButton onClick={this.onCancelClick}>
                  Cancel
                </TextButton>
                <Button type="submit"
                        disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                  Submit
                </Button>
              </ButtonRow>
            </FormContent>
          )}
        </Formik>
      </FullView>
    );
  }

}
