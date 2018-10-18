import { Field, Formik } from 'formik';
import React from 'react';
import { Button, View } from 'react-native';
import FKTextInput from '../FKTextInput';

const RefactorForm = () => (
  <Formik
    onSubmit={({ firstName, lastName }) => {
      console.log(`firstName: ${firstName}`);
      console.log(`lastName: ${lastName}`);
    }}
    render={({
      handleSubmit,
    }) => (
      <View>
        <Field
          component={FKTextInput}
          name="firstName" 
        />
        <Field
          component={FKTextInput}
          name="lastName" 
        />
        <Button
          title="Submit Refactor"
          onPress={handleSubmit}
        />
      </View>
    )}
  />
);

export default RefactorForm;
