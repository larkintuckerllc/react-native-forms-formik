import { Formik } from 'formik';
import React from 'react';
import { Button, View } from 'react-native';

const HelloForm = () => (
  <Formik
    onSubmit={() => {
      console.log('SUBMITTED');
    }}
    render={({
      handleSubmit,
    }) => (
      <View>
        <Button
          title="Submit Hello"
          onPress={handleSubmit}
        />
      </View>
    )}
  />
);

export default HelloForm;
