import React from "react";
import { ScrollView, View, StyleSheet, Image, WebView } from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card, Button, Text } from "react-native-elements";
import dateformat from "dateformat";

const style = StyleSheet.create({
  backText: {
    color: "black"
  }
});

export default class Apps extends React.Component {
  getDate(date) {
    return dateformat(new Date(date));
  }

  static navigationOptions = props => {
    return {
      headerTitle: props.navigation.state.params.name,
      headerStyle: {
        backgroundColor: "#91c26a"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: (
        <Button
          icon={{
            name: "chevron-left",
            size: 20,
            color: "black"
          }}
          title="Back"
          onPress={() => props.navigation.goBack()}
          buttonStyle={{
            backgroundColor: "transparent"
          }}
          color="#000"
        />
      )
    };
  };

  render() {
    return (
      <ScrollView>
        {this.props.navigation.state.params.items.map(
          ({
            id,
            name,
            description,
            createdAt,
            links: {
              open,
              thumbnail: { href }
            }
          }) => (
              <View key={id}>
                <Card title={name}>
                  <Image
                    style={{ height: 150 }}
                    resizeMode="contain"
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUlDTpUQ6JnC9koimGYiKGVRpXoQ5T9ENSKLecRsOguCQtDaF"
                    }}
                  />
                  <Text style={{ color: "gray" }}>{description}</Text>
                  <Text style={{ color: "gray" }}>{this.getDate(createdAt)}</Text>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View
                      style={{
                        width: 40,
                        height: 20
                      }}
                    >
                      <Icon
                        style={{
                          paddingLeft: 15,
                          color: "gray",
                          marginLeft: -15
                        }}
                        name="star"
                        size={15}
                      />
                    </View>
                    <View
                      style={{
                        width: 40,
                        height: 20,
                        marginLeft: -15
                      }}
                    >
                      <Icon
                        style={{ paddingLeft: 15, color: "gray" }}
                        name="plus-square"
                        size={15}
                      />
                    </View>
                  </View>
                  <Button
                    rightIcon={{ name: "open-in-new" }}
                    title="OPEN APP"
                    fontSize={12}
                    color="#63a649"
                    buttonStyle={{
                      backgroundColor: "#fff",
                      width: "100%",
                      height: 35,
                      borderColor: "#63a649",
                      borderWidth: 1,
                      borderRadius: 5,
                      marginTop: 20
                    }}
                    onPress={() => {
                      this.props.navigation.navigate("App", { uri: open.href });
                    }}
                  />
                </Card>
              </View>
            )
        )}
      </ScrollView>
    );
  }
}
