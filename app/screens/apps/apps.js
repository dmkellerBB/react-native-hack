import React from "react"
import { ScrollView, View } from "react-native"
import { Card, Button, Text } from "react-native-elements"
import dateformat from 'dateformat'

export default class Apps extends React.Component {
  getDate = date => dateformat(new Date(date))

  static navigationOptions = props => {
    return {
      headerTitle: "Apps",
      headerLeft: (
        <Button
          icon={{ name: 'chevron-left', size: 20, color: 'black' }}
          title='Back'
          onPress={() => props.navigation.goBack()}
          buttonStyle={{ backgroundColor: 'transparent' }}
          color='#000'
        />
      )
    }
  }

  render() {
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
                buttonStyle={{ backgroundColor: "#fff", width: "100%", height: 35, borderColor: "#63a649", borderWidth: 1, borderRadius: 5, marginTop: 20 }}
                onPress={() => this.props.navigation.navigate("App", { uri: open.href })}
              />
            </Card>
          </View>
        ))}
      </ScrollView>
    )
  }
}
