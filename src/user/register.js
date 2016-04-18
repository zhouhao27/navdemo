'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
})
