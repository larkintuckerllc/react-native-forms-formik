import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import HelloForm from './components/HelloForm';
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
          {activeForm === 'hello' && <HelloForm />}
          {activeForm === 'simple' && <SimpleForm />}
      </View>
    );
  }

  handlePressHello = () => this.setState({ activeForm: 'hello' });

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
