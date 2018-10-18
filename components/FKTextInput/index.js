import { PropTypes } from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const FKTextInput = ({
  field: {
    name,
    value,
    onChange,
  }
}) => (
  <TextInput
    onChangeText={onChange(name)}
    style={styles.rootInput}
    value={value}
  />
);

FKTextInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }).isRequired,
};

export default FKTextInput;
