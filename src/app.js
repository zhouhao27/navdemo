'use strict'

import React, {
  Navigator,
  Component
} from 'react-native'
import Launch from './launch/launch'

export default class App extends Component {
  renderScene(route,navigator) {
    return <route.component
      {...route.passProps}
      title={route.name}
      navigator={navigator} />
  }

  render() {
    // TODO: check if need to navigate to Launch or Home
    const initialScreen = Launch
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{name:'Launch',
          component:initialScreen}}
        renderScene={this.renderScene}
      />
    );
  }
}
