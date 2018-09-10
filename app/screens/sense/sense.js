import React from "react";
import { View, StyleSheet, WebView } from "react-native";
import { Button, Text } from "native-base";
import sharedStyle from "../../style/shared";
import Icon from "react-native-vector-icons/FontAwesome";

const style = StyleSheet.create({
	cancelText: {
		color: "black"
	}
});

export default class Sense extends React.Component {
	static navigationOptions = props => {
		return {
			headerRight: (
				<Button
					transparent
					iconLeft
					style={sharedStyle.rightHeaderButton}
					onPress={() => props.navigation.navigate("LeadForm")}
				>
					<Icon name="plus" size={20} />
				</Button>
			)
		};
	};

	render() {
		return <WebView source={{ uri: "https://qcs.us.qlik-stage.com/" }} />;
	}
}
