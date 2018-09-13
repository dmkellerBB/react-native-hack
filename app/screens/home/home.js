import React from "react";
import axios from 'axios'
import { Button, Text } from "native-base";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import sharedStyle from "../../style/shared";

const style = StyleSheet.create({
  backText: {
    color: "black"
  }
});

export default class FavoriteItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteItems: []
    }
  }
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
        <Card title="Favorites">
          <Text>{item.title}</Text>
        </Card>
      </View>
    );
  }

  async componentDidMount() {
    try {
      let res = await axios({
        url: 'https://dev-integration2.us.qlik-stage.com/api/v1/collections/5b9ab7a7b277760001ecab27/items',
        headers: {
          'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY4NjY1MTcsImV4cCI6MTUzNjk1MjkxNywiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TUd8HHjhXT_ISwl3HgVZ8CHz0QQ7MipIzdaj600w3uYF9D-g7YC3k2eaiiMo7PH86Y4XSWX5lRQ29gjRmDViIwNy7v_3UrE8cmi2xR3x3VhtguKCjYlbUQBoAePU9bOTRKiEakm3RGVjq9Aft99xWlvzWpGBt39cm8XcxweZq2-ydNYxuZnk2R6OFze7MblIts_ARLV_7G1WPBqMebWvOfTV2TaiuaUSodBEss7PAb5NZ9bwi17hSxHWJ3dTzkjT2r3hfjAWea48skVdodpiNWxmyqRC3oTahppAx-5ED12AksHXSYytacVLDueMJpeCviOORTWoiKbGFZAdwKt4PQ',
        }
      })
      console.log(res)
      this.setState({ favoriteItems: res.data.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.favoriteItems.map(({ id, name, description, type, itemCount }) => (
          <View key={id} >
            <Card title={name} >
              <Text>{description}</Text>
              <Text>{type}</Text>
              <Text>{itemCount}</Text>
            </Card>
          </View>
        ))}
      </ScrollView>
    );
  }
}
