import { PropTypes } from 'prop-types';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

const FKTextInput = ({
  disabled,
  field: {
    name,
    onBlur,
    onChange,
    value,
  },
  form: {
    errors,
    touched,
  },
}) => (
  <View>
    <TextInput
      onChangeText={onChange(name)}
      onBlur={onBlur(name)}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      style={[
        styles.rootInput,
        {
          color: disabled ? 'gray' : 'black',
          borderColor: errors[name] && touched[name] ? 'red' : 'gray'
        },
      ]}
      value={value}
    />
   {errors[name] && touched[name] && <Text style={styles.rootError}>{errors[name]}</Text>}
  </View>
);

FKTextInput.propTypes = {
  disabled: PropTypes.bool,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
  }).isRequired,
};

FKTextInput.defaultProps = {
  disabled: false,
};

export default FKTextInput;
