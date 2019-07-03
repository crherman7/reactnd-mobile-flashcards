import React from "react";
import { View, StatusBar, AsyncStorage } from "react-native";
import DeckList from "./components/DeckList/DeckList";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import NewDeck from "./components/NewDeck/NewDeck";
import Deck from "./components/Deck/Deck";
import NewCard from "./components/NewCard/NewCard";
import Quiz from "./components/Quiz/Quiz";
import { setLocalNotification } from "./utils/helpers";

const store = createStore(reducer, middleware);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar hidden={true} />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const Navigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: () => ({
        title: "Flashcard Decks"
      })
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: () => ({
        title: "New Deck"
      })
    },
    Deck: {
      screen: Deck,
      navigationOptions: () => ({
        title: "Deck"
      })
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: () => ({
        title: "New Flashcard"
      })
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: () => ({
        title: "Quiz"
      })
    }
  },
  {
    initialRouteName: "DeckList"
  }
);

const AppNavigator = createAppContainer(Navigator);
