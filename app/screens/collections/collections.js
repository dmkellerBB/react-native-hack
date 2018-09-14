import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import axios from "axios";
import { Card, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const collEndpoint =
  "https://dev-integration2.us.qlik-stage.com/api/v1/collections";
const headers = {
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY5NDUxMDUsImV4cCI6MTUzNzAzMTUwNSwiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.kcG02WBDqTKtRNxWL9Lgaq7_rouoQ1MHmK3vJHzaFtnYQGWxdt6O-O9Xq-40WAUaWtBO0sQiVqFDQJYPFFXmXE4kKmptcaozlg_On1tatfbNdWFQQW1J4qL00wO5WEcVjMN4EGzR1KSc5VYY77QBb4909KcxLjz4yzvYKwaVMUFo8p1sejjQPh8MrqP7D7fIKsDAs0yDdWWyP5ACgduszlYKoLibE_rGs7X706jjUrgVc9Y8bWTNX4Zb-Vj5brsU8KONIOUS8Z-857RKux7bjfVDhigdIVmo8rdOQHjXvfkrM3FNGs06Z2DGanzKL8vtC4sBri73zxGUXrwUqmxd8g`
};

export default class Collections extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      collections: []
    };
    this.onCollectionPress = this.onCollectionPress.bind(this);
  }

  async onCollectionPress (name, id) {
    try {
      const res = await axios({
        method: "get",
        url: `${collEndpoint}/${id}/items`,
        headers
      });
      this.props.navigation.navigate("Apps", { name: name, items: res.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  static navigationOptions = props => {
    return {
      headerTitle: "Collections",
      headerStyle: {
        backgroundColor: "#91c26a"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  async componentDidMount () {
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

  render () {
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
                    width: "100%",
                    height: 35,
                    borderColor: "#63a649",
                    borderWidth: 1,
                    borderRadius: 5,
                    marginTop: 20
                  }}
                  onPress={() => {
                    this.onCollectionPress(name, id);
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
