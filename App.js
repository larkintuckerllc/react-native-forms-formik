import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import HelloForm from './components/HelloForm';
import RefactorForm from './components/RefactorForm';
import SimpleForm from './components/SimpleForm';

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
          {activeForm === 'hello' && <HelloForm />}
          {activeForm === 'simple' && <SimpleForm />}
          {activeForm === 'refactor' && <RefactorForm />}
      </View>
    );
  }

  handlePressHello = () => this.setState({ activeForm: 'hello' });

  handlePressRefactor = () => this.setState({ activeForm: 'refactor' });

  handlePressSimple = () => this.setState({ activeForm: 'simple' });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
