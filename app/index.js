import React from "react";
import * as ReactNavigation from "react-navigation";
import { connect } from "react-redux";
import { View } from "react-native";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import { Font, AppLoading } from "expo";
import AppNavigator from "./navigation";
import actionCreators from "./actions/index";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	async componentWillMount() {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
		});
		this.setState({ loading: false });
	}

	componentDidMount() {
		this.props.actions.auth.init();
	}

	render() {
		if (this.state.loading) {
			return <AppLoading />;
		}
		const addListener = createReduxBoundAddListener("root");
		const navigation = ReactNavigation.addNavigationHelpers({
			dispatch: this.props.dispatch,
			state: this.props.nav,
			addListener
		});

		return (
			<View style={{ flex: 1, backgroundColor: "white" }}>
				<AppNavigator navigation={navigation} />
			</View>
		);
	}
}

const mapDispatchToProps = () => actionCreators;
const mapStateToProps = state => ({ nav: state.nav });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
