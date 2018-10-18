import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import HelloForm from './components/HelloForm';
import RefactorForm from './components/RefactorForm';
import Refactor2Form from './components/Refactor2Form';
import SimpleForm from './components/SimpleForm';
import SubmissionForm from './components/SubmissionForm';
import ValidationForm from './components/ValidationForm';

export default class App extends React.Component {
  state = {
    activeForm: 'hello',
  };

  render() {
    const { activeForm } = this.state;
    return (
      <View style={styles.container}>
          <Button title="Hello Form" onPress={this.handlePressHello} />
          <Button title="Simple Form" onPress={this.handlePressSimple} />
          <Button title="RefactorForm" onPress={this.handlePressRefactor} />
          <Button title="ValidationForm" onPress={this.handlePressValidation} />
          <Button title="Refactor2Form" onPress={this.handlePressRefactor2} />
          <Button title="SubmissionForm" onPress={this.handlePressSubmission} />
          {activeForm === 'hello' && <HelloForm />}
          {activeForm === 'simple' && <SimpleForm />}
          {activeForm === 'refactor' && <RefactorForm />}
          {activeForm === 'validation' && <ValidationForm />}
          {activeForm === 'refactor2' && <Refactor2Form />}
          {activeForm === 'submission' && <SubmissionForm />}
      </View>
    );
  }

  handlePressHello = () => this.setState({ activeForm: 'hello' });

  handlePressRefactor = () => this.setState({ activeForm: 'refactor' });

  handlePressRefactor2 = () => this.setState({ activeForm: 'refactor2' });

  handlePressSimple = () => this.setState({ activeForm: 'simple' });

  handlePressSubmission = () => this.setState({ activeForm: 'submission' });

  handlePressValidation = () => this.setState({ activeForm: 'validation' });

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
