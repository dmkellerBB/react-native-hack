import React from "react";
import axios from "axios";
import { Image } from "react-native";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import dateformat from "dateformat";

const style = StyleSheet.create({
  backText: {
    color: "black"
  }
});

export default class FavoriteItems extends React.Component {
  getDate (date) {
    return dateformat(new Date(date));
  }

  constructor (props) {
    super(props);
    this.state = {
      favoriteItems: []
    };
  }

  async componentDidMount () {
    try {
      let res = await axios({
        url:
          "https://dev-integration2.us.qlik-stage.com/api/v1/collections/5b9ab7a7b277760001ecab27/items",
        headers: {
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY5NDUxMDUsImV4cCI6MTUzNzAzMTUwNSwiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.kcG02WBDqTKtRNxWL9Lgaq7_rouoQ1MHmK3vJHzaFtnYQGWxdt6O-O9Xq-40WAUaWtBO0sQiVqFDQJYPFFXmXE4kKmptcaozlg_On1tatfbNdWFQQW1J4qL00wO5WEcVjMN4EGzR1KSc5VYY77QBb4909KcxLjz4yzvYKwaVMUFo8p1sejjQPh8MrqP7D7fIKsDAs0yDdWWyP5ACgduszlYKoLibE_rGs7X706jjUrgVc9Y8bWTNX4Zb-Vj5brsU8KONIOUS8Z-857RKux7bjfVDhigdIVmo8rdOQHjXvfkrM3FNGs06Z2DGanzKL8vtC4sBri73zxGUXrwUqmxd8g"
        }
      });
      this.setState({ favoriteItems: res.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  static navigationOptions = props => {
    return {
      headerTitle: "Home",
      headerStyle: {
        backgroundColor: "#91c26a"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  render () {
    return (
      <ScrollView>
        {this.state.favoriteItems.map(
          ({
            id,
            name,
            description,
            createdAt,
            links: {
              open,
              thumbnail: { href }
            }
          }) => (
              <View key={id}>
                <Card title={name}>
                  <Image
                    style={{ height: 150 }}
                    resizeMode="contain"
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUlDTpUQ6JnC9koimGYiKGVRpXoQ5T9ENSKLecRsOguCQtDaF"
                    }}
                  />
                  {!!description && (
                    <Text style={{ color: "gray" }}>{description}</Text>
                  )}

                  <Text style={{ color: "gray" }}>{this.getDate(createdAt)}</Text>
                  <Button
                    icon={{ name: "open-in-new" }}
                    title="OPEN APP"
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
                    onPress={() =>
                      this.props.navigation.navigate("App", { uri: open.href })
                    }
                  />
                </Card>
              </View>
            )
        )}
      </ScrollView>
    );
  }
}
