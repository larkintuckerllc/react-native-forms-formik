import { Formik } from 'formik';
import React from 'react';
import Refactor2FormView from './Refactor2FormView';

const validate = ({ firstName, lastName }) => {
  const errors = {};
  if (firstName === undefined) {
    errors.firstName = 'Required';
  } else if (firstName.trim() === '') {
    errors.firstName = 'Must not be blank';
  }
  if (lastName === undefined) {
    errors.lastName = 'Required';
  } else if (lastName.trim() === '') {
    errors.lastName = 'Must not be blank';
  }
  return errors;
};

const Refactor2Form = () => (
  <Formik
    onSubmit={({ firstName, lastName }) => {
      console.log(`firstName: ${firstName}`);
      console.log(`lastName: ${lastName}`);
    }}
    validate={validate}
    component={Refactor2FormView}
  />
);

export default Refactor2Form;
