'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native'
import Posts from './posts'
import NewPost from './new-post'

export default class Home extends React.Component {

  renderScene(route,navigator) {
    return <route.component
      {...route.passProps}
      title={route.name}
      navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{
          name:'Posts',
          component:Posts,
          rightText: 'New'
        }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.nav }
            routeMapper={NavigationBarRouteMapper} />
        }
      />
    )
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>
    )}
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress)
      return (
        <TouchableHighlight
          onPress={ () => route.onPress() }>
          <Text style={styles.rightNavButtonText}>{ route.rightText || 'Right Button'}</Text>
        </TouchableHighlight>
      )
  },
  Title(route, navigator, index, navState) {
    return <Text style={styles.title}>Posts</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  leftNavButtonText: {
    fontSize: 18,
    marginLeft: 13,
    marginTop: 2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight: 13,
    marginTop: 2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  },
  title: {
    marginTop: 4,
    fontSize: 16
  },

})
