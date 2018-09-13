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
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    try {
      axios({
        method: 'get',
        url: 'https://qcs.us.qlik-stage.com/api/v1/collections',
        headers: {
          'cookie': 'eas.sid=yZCBC2dK8x6OSwyn1OAmMIoO_2TCrLeB; eas.sid.sig=U3rprELcsT5RpOXQQP1rMsLTzO4',
          'accept': '*/*',
          'authority': 'qcs.us.qlik-stage.com'
        }
      })
    } catch (err) {
      console.log(err)
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

  render() {
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
