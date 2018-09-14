import React from "react"
import { StackNavigator, TabNavigator } from "react-navigation"
import Icon from "react-native-vector-icons/FontAwesome"
import screens from "../screens"

const { Home, Collections, Apps, App } = screens

const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarLabel: "Home",
        tabBarIcon: () => <Icon name="home" size={20} />
      }
    },
    Collections: {
      screen: Collections,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarLabel: "Collections",
        tabBarIcon: () => <Icon name="th-large" size={20} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "#bfbfbf"
    },
    animationEnabled: true
  }
)

const MainNavigator = StackNavigator(
  {
    Main: {
      screen: Tabs
    },
    Apps: {
      screen: Apps
    },
    App: {
      screen: App
    }
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
)

export default StackNavigator(
  {
    Main: {
      screen: MainNavigator
    }
  },
  {
    initialRouteName: "Main"
  }
)
