import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
import sharedStyle from "../../style/shared";

const style = StyleSheet.create({
  backText: {
    color: "black"
  }
});

export default class loginScreen extends React.PureComponent {
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
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>Kpi's and shit like that</Text>
        <Card
          title='HELLO WORLD'
          image={}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
