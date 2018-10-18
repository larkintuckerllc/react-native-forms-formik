import { Formik } from 'formik';
import React from 'react';
import SubmissionFormView from './SubmissionFormView';

const wait = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

const handleSubmit = async (
  { firstName, lastName },
  { resetForm, setStatus, setSubmitting }
) => {
  setStatus({});
  try {
    await wait();
    // throw new Error(); // TESTING ERROR CASE
    resetForm();
    setStatus({ succeeded: true });
    setSubmitting(false);
    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);
  } catch (err) {
    setStatus({ failed: true });
    setSubmitting(false);
  }
};

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

const SubmissionForm = () => (
  <Formik
    onSubmit={handleSubmit}
    validate={validate}
    component={SubmissionFormView}
  />
);

export default SubmissionForm;
