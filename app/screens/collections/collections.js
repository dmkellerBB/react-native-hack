import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import axios from "axios";
import { Card, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const collEndpoint =
	"https://dev-integration2.us.qlik-stage.com/api/v1/collections";
const headers = {
	Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY4NjIzMzEsImV4cCI6MTUzNjk0ODczMSwiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.rEhefDS1PAu4fNl_HRCYBwL1NpWeoS29Ze9b1eZ4EDsrfpOgShryHJlS829nQySw-0OIGQvcpgNmxQtFsOuLkeA4FdyZ8ftJj6OnXRYpJ2WuFfKTL5LHzz09uJsqALAOM3poRjO1hH1hSbHrKioeATe0DMooEHCmFaIB3VkMs54-dVUXXtGfBJoFY5LdfGCs4xBQuEfw8PFwGPNN9AU5LAcLMlIVq2jBhMZrF7GUjHzTrSKM6mGWeI7Fo_cDW4pN48u2utS60dpo9onDZ-smStQkBeVi2cuiDrL-SSeBNhEZxpVTq3Wh39xgoOyMWdd7hryMTXlGYspoCEQR_GAmWw`
};

export default class Collections extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: []
		};
		this.onCollectionPress = this.onCollectionPress.bind(this);
	}

	async onCollectionPress(id) {
		try {
			const res = await axios({
				method: "get",
				url: `${collEndpoint}/${id}/items`,
				headers
			});
			this.props.navigation.navigate("Apps", { items: res.data.data });
		} catch (err) {
			console.log(err);
		}
	}

	static navigationOptions = props => {
		return {
			headerTitle: "Collections",
			headerStyle: {
				backgroundColor: "#c0dca9"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				fontWeight: "bold"
			}
		};
	};

	async componentDidMount() {
		try {
			let res = await axios({
				method: "get",
				url: collEndpoint,
				headers
			});
			this.setState({ collections: res.data.data });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<ScrollView>
				{this.state.collections.map(
					({ id, name, description, type, itemCount }) => (
						<View key={id}>
							<Card title={name}>
								<Text style={{ color: "gray" }}>{description}</Text>
								<Text
									style={{
										color: "gray",
										marginLeft: 0,
										marginTop: 5,
										marginBottom: 5
									}}
								>
									{`${type}  `}
									{type === "public" ? (
										<Icon style={{ paddingLeft: 15 }} name="users" size={15} />
									) : (
										<Icon style={{ paddingLeft: 15 }} name="user" size={15} />
									)}
								</Text>
								<Text style={{ color: "gray" }}>Items: {itemCount}</Text>
								<Button
									rightIcon={{ name: "open-in-new" }}
									title="VIEW APPS"
									fontSize={12}
									color="#63a649"
									buttonStyle={{
										backgroundColor: "#fff",
										width: 300,
										height: 35,
										borderColor: "#63a649",
										borderWidth: 1,
										borderRadius: 5,
										marginTop: 20
									}}
									onPress={() => {
										this.onCollectionPress(id);
									}}
								/>
							</Card>
						</View>
					)
				)}
			</ScrollView>
		);
	}
}
