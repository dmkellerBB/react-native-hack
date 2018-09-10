import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import screens from "../screens";

const { Home, Apps, Sense } = screens;

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
		Apps: {
			screen: Apps,
			navigationOptions: {
				gesturesEnabled: false,
				tabBarLabel: "Apps",
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
);

const MainNavigator = StackNavigator(
	{
		App: {
			screen: Tabs
		},
		Sense: {
			screen: Sense
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
