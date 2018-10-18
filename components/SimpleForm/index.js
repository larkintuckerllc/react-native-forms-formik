import { Formik } from 'formik';
import React from 'react';
import { Button, View } from 'react-native';

const SimpleForm = () => (
  <Formik
    onSubmit={() => {
      console.log('SUBMITTED');
    }}
    render={({
      handleSubmit,
    }) => (
      <View>
        <Button
          title="Submit Simple"
          onPress={handleSubmit}
        />
      </View>
    )}
  />
);

export default SimpleForm;
