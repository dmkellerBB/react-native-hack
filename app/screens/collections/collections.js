import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { Card } from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import sharedStyle from "../../style/shared";

const style = StyleSheet.create({
	backText: {
		color: "black"
	}
});

export default class Collections extends React.Component {
	static navigationOptions = props => {
		return {
			headerRight: (
				<Button
					transparent
					iconLeft
					style={sharedStyle.headerButton}
					onPress={() => props.navigation.navigate("Webview")}
				>
					<Text style={style.backText}>Webview</Text>
				</Button>
			)
		};
	};

	_renderItem({ item, index }) {
		return (
			<View>
				<Card title="HELLO WORLD">
					<Text>{item.title}</Text>
				</Card>
			</View>
		);
	}

	render() {
		const data = [
			{ title: "cow" },
			{ title: "cow" },
			{ title: "cow" },
			{ title: "cow" },
			{ title: "cow" }
		];
		return (
			<View style={{ flex: 1 }}>
				<Carousel
					data={data}
					renderItem={this._renderItem}
					sliderWidth={400}
					itemWidth={300}
				/>
				<Carousel
					layout={"default"}
					data={data}
					renderItem={this._renderItem}
					sliderWidth={400}
					itemWidth={300}
				/>
			</View>
		);
	}
}
