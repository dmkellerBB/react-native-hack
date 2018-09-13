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

  onAppOpen (url) {
    alert(url)
  }

  render () {
    return (
      <ScrollView>
        {this.props.navigation.state.params.items.map(({ id, name, description, createdAt, links: { open, thumbnail: { href } } }) => (
          <View key={id}>
            <Card title={name} Image={href}>
              <Text>description: {description}</Text>
              <Text>created: {this.getDate(createdAt)}</Text>
              <Button
                rightIcon={{ name: 'open-in-new' }}
                title='OPEN APP'
                fontSize={12}
                color='#63a649'
                buttonStyle={{
                  backgroundColor: "#fff",
                  width: 300,
                  height: 35,
                  borderColor: "#63a649",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginTop: 20
                }}
                onPress={() => { this.onAppOpen(open.href) }}
              />
            </Card>
          </View>
        ))}
      </ScrollView>
    )
  }
}
