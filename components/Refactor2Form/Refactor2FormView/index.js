import { Field } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View} from 'react-native';
import FKTextInput from '../../FKTextInput';

const Refactor2FormView = ({
  handleSubmit,
  isValid,
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
      disabled={!isValid}
      title="Submit Refactor2"
      onPress={handleSubmit}
    />
  </View>
);

Refactor2FormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default Refactor2FormView;
