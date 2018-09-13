import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import axios from 'axios'
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
  constructor (props) {
    super(props)
    this.state = {
      collections: []
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

  async componentDidMount () {
    try {
      let res = await axios({
        method: 'get',
        url: 'https://dev-integration2.us.qlik-stage.com/api/v1/collections',
        headers: {
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY4NjIzMzEsImV4cCI6MTUzNjk0ODczMSwiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.rEhefDS1PAu4fNl_HRCYBwL1NpWeoS29Ze9b1eZ4EDsrfpOgShryHJlS829nQySw-0OIGQvcpgNmxQtFsOuLkeA4FdyZ8ftJj6OnXRYpJ2WuFfKTL5LHzz09uJsqALAOM3poRjO1hH1hSbHrKioeATe0DMooEHCmFaIB3VkMs54-dVUXXtGfBJoFY5LdfGCs4xBQuEfw8PFwGPNN9AU5LAcLMlIVq2jBhMZrF7GUjHzTrSKM6mGWeI7Fo_cDW4pN48u2utS60dpo9onDZ-smStQkBeVi2cuiDrL-SSeBNhEZxpVTq3Wh39xgoOyMWdd7hryMTXlGYspoCEQR_GAmWw`
        }
      })
      this.setState({ collections: res.data.data })
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <ScrollView>
        {this.state.collections.map(({ name, description, type, itemsCount }) => (
          <View>
            <Card title={name}>
              <Text>{description}</Text>
              <Text>{type}</Text>
              <Text>{description}</Text>
              <Text>{itemsCount}</Text>
            </Card>
          </View>
        ))}
      </ScrollView>
    );
  }
}
