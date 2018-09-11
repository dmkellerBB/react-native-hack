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

  _renderItem ({ item, index }) {
    return (
      <View>
        <Card title="Collection">
          <Text>{item.title}</Text>
        </Card>
      </View>
    );
  }

  async componentDidMount () {
    try {
      let res = await axios({
        url: 'https://dev-integration2.us.qlik-stage.com/api/v1/collections',
        headers: { Cookie: 'eas.sid=8SM5onyoU6N-If_5RP1VvyWjsTiY5rv1; eas.sid.sig=PS-2mvq0VYTDGJD9bE4sP44vM2E;' }
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
