import { Field } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, Text, View} from 'react-native';
import FKTextInput from '../../FKTextInput';
import styles from './styles';

const SubmissionFormView = ({
  handleSubmit,
  isSubmitting,
  isValid,
  status,
}) => (
  <View>
    <Field
      component={FKTextInput}
      disabled={isSubmitting}
      name="firstName" 
    />
    <Field
      component={FKTextInput}
      disabled={isSubmitting}
      name="lastName" 
    />
    {status.succeeded && <Text style={styles.rootSucceeded}>SUCCEEDED</Text>}
    {status.failed && <Text style={styles.rootFailed}>FAILED</Text>}
    <Button
      disabled={!isValid || isSubmitting}
      title="Submit Submission"
      onPress={handleSubmit}
    />
  </View>
);

SubmissionFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  status: PropTypes.object,
};

SubmissionFormView.defaultProps = {
  status: {},
};

export default SubmissionFormView;
