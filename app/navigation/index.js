import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import screens from "../screens";

const { Home, Collections, Apps, App, Webview } = screens;

const Tabs = TabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				gesturesEnabled: false,
				tabBarLabel: "Home",
				tabBarIcon: ({ tintColor }) => (
					<Icon name="home" size={20} color={tintColor} />
				)
			}
		},
		Collections: {
			screen: Collections,
			navigationOptions: {
				gesturesEnabled: false,
				tabBarLabel: "Collections",
				tabBarIcon: ({ tintColor }) => (
					<Icon name="th-large" size={20} color={tintColor} />
				)
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "#61a729",
			inactiveTintColor: "gray"
		},
		animationEnabled: true
	}
);

const MainNavigator = StackNavigator(
	{
		App: {
			screen: Tabs
		},
		Apps: {
			screen: Apps
		}
	},
	{
		initialRouteName: "App",
		headerMode: "none"
	}
);

export default StackNavigator(
	{
		Main: {
			screen: MainNavigator
		}
	},
	{
		initialRouteName: "Main"
	}
);
