import React from "react";
import axios from 'axios'
import { Text } from "native-base";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import sharedStyle from "../../style/shared";
import dateformat from 'dateformat'

const style = StyleSheet.create({
  backText: {
    color: "black"
  }
});

export default class FavoriteItems extends React.Component {
  getDate(date) {
    return dateformat(new Date(date))
  }

  constructor(props) {
    super(props)
    this.state = {
      favoriteItems: []
    }
  }

  async componentDidMount() {
    try {
      let res = await axios({
        url: 'https://dev-integration2.us.qlik-stage.com/api/v1/collections/5b9ab7a7b277760001ecab27/items',
        headers: {
          'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY4NjY1MTcsImV4cCI6MTUzNjk1MjkxNywiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TUd8HHjhXT_ISwl3HgVZ8CHz0QQ7MipIzdaj600w3uYF9D-g7YC3k2eaiiMo7PH86Y4XSWX5lRQ29gjRmDViIwNy7v_3UrE8cmi2xR3x3VhtguKCjYlbUQBoAePU9bOTRKiEakm3RGVjq9Aft99xWlvzWpGBt39cm8XcxweZq2-ydNYxuZnk2R6OFze7MblIts_ARLV_7G1WPBqMebWvOfTV2TaiuaUSodBEss7PAb5NZ9bwi17hSxHWJ3dTzkjT2r3hfjAWea48skVdodpiNWxmyqRC3oTahppAx-5ED12AksHXSYytacVLDueMJpeCviOORTWoiKbGFZAdwKt4PQ',
        }
      })
      this.setState({ favoriteItems: res.data.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.favoriteItems.map(({ id, name, description, createdAt, links: { open, thumbnail: { href } } }) => (
          <View key={id}>
            <Card title={name} Image={href}>
              <Text>description: {description}</Text>
              <Text>created: {this.getDate(createdAt)}</Text>
              <Button
                icon={{ name: 'open-in-new' }}
                title='OPEN APP'
                fontSize={12}
                color='#63a649'
                buttonStyle={{
                  backgroundColor: "#fff",
                  width: '100%',
                  height: 35,
                  borderColor: "#63a649",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginTop: 20
                }}
                onPress={() => this.props.navigation.navigate("Webview", { uri: open.href })}
              />
            </Card>
          </View>
        ))}
      </ScrollView>
    )
  }
}
