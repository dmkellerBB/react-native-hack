import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import axios from 'axios'
import { Card, Button, Text } from "react-native-elements";
import dateformat from 'dateformat'

const style = StyleSheet.create({
  backText: {
    color: "black"
  }
});

export default class Apps extends React.Component {
  getDate (date) {
    return dateformat(new Date(date))
  }

  static navigationOptions = props => {
    return {
      headerTitle: "Apps",
      headerLeft: (
        <Button
          icon={{
            name: 'chevron-left',
            size: 20,
            color: 'black'
          }}
          title='Back'
          onPress={() => props.navigation.goBack()}
          buttonStyle={{
            backgroundColor: 'transparent'
          }}
          color='#000'
        />
      )
    }
  }

  render () {
    return (
      <ScrollView>
        {this.props.navigation.state.params.items.map(({ id, name, description, createdAt }) => (
          <View key={id}>
            <Card title={name}>
              <Text>description: {description}</Text>
              <Text>created: {this.getDate(createdAt)}</Text>
            </Card>
          </View>
        ))}
      </ScrollView>
    )
  }
}
