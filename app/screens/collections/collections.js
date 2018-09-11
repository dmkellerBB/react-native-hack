import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
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
				<Card title="Collection">
					<Text>{item.title}</Text>
				</Card>
			</View>
		);
	}

	render() {
		const data = [
			{ title: "Insight chart" },
			{ title: "Lund app" },
			{ title: "Boston app" },
			{ title: "kpi chart" },
			{ title: "Stock market app" }
		];
		const collections = [1, 2, 3, 4, 5, 6];
		return (
			<ScrollView>
				{collections.map(key => (
					<Carousel
						key={key}
						data={data}
						renderItem={this._renderItem}
						sliderWidth={400}
						itemWidth={300}
					/>
				))}
			</ScrollView>
		);
	}
}
