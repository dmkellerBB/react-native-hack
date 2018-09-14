import React from "react";
import { WebView } from "react-native";
import { Button } from "react-native-elements";

export default class App extends React.Component {
	static navigationOptions = props => {
		return {
			headerTitle: "App",
			headerStyle: {
				backgroundColor: "#91c26a"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				fontWeight: "bold"
			},
			headerLeft: (
				<Button
					icon={{
						name: "chevron-left",
						size: 20,
						color: "black"
					}}
					title="Back"
					onPress={() => props.navigation.goBack()}
					buttonStyle={{ backgroundColor: "transparent" }}
					color="#000"
				/>
			)
		};
	};

	render = () => (
		<WebView source={{ uri: this.props.navigation.state.params.uri }} />
	);
}
