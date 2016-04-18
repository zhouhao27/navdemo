'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Posts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Posts</Text>
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
  }
})
