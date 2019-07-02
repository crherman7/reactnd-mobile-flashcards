import React from "react";
import { View, StatusBar } from "react-native";
import DeckList from "./components/DeckList/DeckList";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Card from "./components/Card/Card";
import Deck from "./components/Deck/Deck";
import NewCard from "./components/NewCard/NewCard";
import NewDeck from "./components/NewDeck/NewDeck";
import DeckListItem from "./components/DeckList/DeckListItem";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <AppNavigator />
      </View>
    );
  }
}

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: DeckList,
        navigationOptions: () => ({
          title: "Decks",
          headerStyle: {
            backgroundColor: "#4D88EF"
          }
        })
      },
      FlashCard: {
        screen: DeckList
      }
    },
    {
      initialRouteName: "FlashCard"
    }
  )
);
