import React from "react";
import { View, StyleSheet, WebView } from "react-native";
import { Button, Text } from "native-base";
import sharedStyle from "../../style/shared";
import Icon from "react-native-vector-icons/FontAwesome";

const style = StyleSheet.create({
	backText: {
		color: "black"
	}
});

export default class Sense extends React.Component {
	static navigationOptions = props => {
		return {
			headerTitle: "Qlik App",
			headerLeft: (
				<Button
					iconLeft
					light
					transparent
					style={{ marginLeft: 10 }}
					onPress={() => props.navigation.goBack()}
				>
					<Icon name="chevron-left" size={20} />
					<Text style={style.backText}>Back</Text>
				</Button>
			)
		};
	};

	render() {
		return <WebView source={{ uri: this.props.navigation.state.params.uri }} />;
	}
}
