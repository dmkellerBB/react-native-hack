import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import sharedStyle from "../../style/shared";

const style = StyleSheet.create({
	backText: {
		color: "black"
	}
});

export default class loginScreen extends React.PureComponent {
	static navigationOptions = props => {
		return {
			headerRight: (
				<Button
					transparent
					iconLeft
					style={sharedStyle.headerButton}
					onPress={() => props.navigation.navigate("Apps")}
				>
					<Text style={style.backText}>Apps</Text>
				</Button>
			)
		};
	};

	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text style={{ fontSize: 30 }}>Show Collections</Text>
				<Button
					onPress={() => this.props.navigation.goBack()}
					title="Dismiss"
				/>
			</View>
		);
	}
}
