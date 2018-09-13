import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { Text, Button } from "native-base";
import axios from 'axios'

import sharedStyle from "../../style/shared";

const style = StyleSheet.create({
  backText: {
    color: "black"
  }
});

export default class loginScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress () {
    axios({
      method: 'get',
      url: 'https://dev-integration2.us.qlik-stage.com/api/v1/collections',
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY4NjIzMzEsImV4cCI6MTUzNjk0ODczMSwiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.rEhefDS1PAu4fNl_HRCYBwL1NpWeoS29Ze9b1eZ4EDsrfpOgShryHJlS829nQySw-0OIGQvcpgNmxQtFsOuLkeA4FdyZ8ftJj6OnXRYpJ2WuFfKTL5LHzz09uJsqALAOM3poRjO1hH1hSbHrKioeATe0DMooEHCmFaIB3VkMs54-dVUXXtGfBJoFY5LdfGCs4xBQuEfw8PFwGPNN9AU5LAcLMlIVq2jBhMZrF7GUjHzTrSKM6mGWeI7Fo_cDW4pN48u2utS60dpo9onDZ-smStQkBeVi2cuiDrL-SSeBNhEZxpVTq3Wh39xgoOyMWdd7hryMTXlGYspoCEQR_GAmWw`
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
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

  render () {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <ScrollView>
        <Button transparent onPress={this.onPress}>
          <Text>Click me!</Text>
        </Button>
        {cards.map(key => (
          <Card key={key} title="HELLO WORLD">
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
							structure than actual design.
						</Text>
            <Button
              icon={{ name: "code" }}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title="VIEW NOW"
            />
          </Card>
        ))}
      </ScrollView>
    );
  }
}
