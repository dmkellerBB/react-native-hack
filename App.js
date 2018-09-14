import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { View } from 'react-native'
import { Root } from 'native-base'
import { Font, AppLoading } from 'expo'
import AppNavigator from './app/navigation'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { loading: true }
  }

  async componentWillMount () {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    })
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) {
      return <AppLoading />
    }

    return (
      <Root>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <AppNavigator />
        </View>
      </Root>
    )
  }
}

export default App
