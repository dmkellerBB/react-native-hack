import React from "react"
import { ScrollView, View } from "react-native"
import axios from 'axios'
import { Card, Button, Text } from "react-native-elements"

const collEndpoint = 'https://dev-integration2.us.qlik-stage.com/api/v1/collections'
const headers = {
  'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUXpSRU5CTlRsRk1EazNOMEU1TVVRMU1qUTROVEZFTTBZNU56SXlSakZFUXpZNE9FSTBPUSJ9.eyJpc3MiOiJodHRwczovL3FsaWstaHlicmlkLmF1dGgwLmNvbS8iLCJzdWIiOiJVVkZQdGtRamZYUEJtSzU4MnZGM0lTRUVUcDBvVTVlNUBjbGllbnRzIiwiYXVkIjoicWxpay5hcGkiLCJpYXQiOjE1MzY5MzIzNDMsImV4cCI6MTUzNzAxODc0MywiYXpwIjoiVVZGUHRrUWpmWFBCbUs1ODJ2RjNJU0VFVHAwb1U1ZTUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.ZLn-9mGFJJtase0c__FNAfcn6FZP2K2QygkBjOPfNTySndrkZY9HKKARzNzV8kpwpAseKPXWjRUezcw2DZNkTHCsPjrYQZUOU80icb5PsQRsfObxOtATSglk6noTWgtp2L3x_lrCrrljozgFEXQKz1X0AN1L8lddJWhjle64lHM_vH7W5VwcABERxYgvD7YEV0rsoGak7W_lHcmcV4rOF4cVxStFfDMBaNXvqDKuJvTcwQ26LWbY_wcQCwP90jwF4Ll-NAi0lI5pru6G9fBixWjl02ruY4kiLZuPS_DcpV_yNV2vUs2Pe2SXUbXyT_Qt4A9T8BgNzAdoiP2hEa5zdQ`
}

export default class Collections extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: []
    }
    this.onCollectionPress = this.onCollectionPress.bind(this)
  }

  static navigationOptions = () => ({ headerTitle: "Collections" })

  async onCollectionPress(name, id) {
    try {
      const res = await axios({
        method: 'get',
        url: `${collEndpoint}/${id}/items`,
        headers
      })
      this.props.navigation.navigate('Apps', { name: name, items: res.data.data })
    } catch (err) {
      console.log(err)
    }

  }

  async componentDidMount() {
    try {
      let res = await axios({
        method: 'get',
        url: collEndpoint,
        headers
      })
      this.setState({ collections: res.data.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.collections.map(({ id, name, description, type, itemCount }) => (
          <View key={id}>
            <Card title={name}>
              <Text>description: {description}</Text>
              <Text>type: {type}</Text>
              <Text>items: {itemCount}</Text>
              <Button
                rightIcon={{ name: 'open-in-new' }}
                title='VIEW APPS'
                fontSize={12}
                color='#63a649'
                buttonStyle={{
                  backgroundColor: "#fff",
                  width: "100%",
                  height: 35,
                  borderColor: "#63a649",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginTop: 20
                }}
                onPress={() => { this.onCollectionPress(name, id) }}
              />
            </Card>
          </View>
        ))}
      </ScrollView>
    );
  }
}
