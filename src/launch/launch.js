'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import Login from '../user/login'

export default class Launch extends React.Component {
  gotoNext() {
    // TODO: if logged in, goto Home otherwise goto Login
    this.props.navigator.replace({
      component: Login
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableHighlight style={ styles.button } onPress={ () => this.gotoNext() }>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 60,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:'#5555cc',
    fontSize: 18
  }
});
