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
  constructor(props) {
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

  _renderItem({ item, index }) {
    return (
      <View>
        <Card title="Collection">
          <Text>{item.title}</Text>
        </Card>
      </View>
    );
  }

  async componentDidMount() {
    try {
      let res = await axios({
        url: 'https://qcs.us.qlik-stage.com/api/v1/collections',
        headers: {
          'cookie': 'eas.sid=yZCBC2dK8x6OSwyn1OAmMIoO_2TCrLeB; eas.sid.sig=U3rprELcsT5RpOXQQP1rMsLTzO4',
          //'accept': '*/*',
          //'authority': 'qcs.us.qlik-stage.com'
        }
      })
      console.log(res)
      this.setState({ collections: res.data.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.collections.map(({ id, name, description, type, itemCount }) => (
          <View key={id} >
            <Card title={name}>
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
