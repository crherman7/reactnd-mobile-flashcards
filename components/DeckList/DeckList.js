import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./DeckListStyle";
import DeckListItem from "./DeckListItem";
import { ScrollView } from "react-native-gesture-handler";

class DeckList extends Component {
  addDeckClick = () => {
    alert("Clicked button!");
  };
  render() {
    // const { decks } = this.props;
    const decks = {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      }
    };
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.listContainer}
          contentContainerStyle={styles.center}
        >
          {decks ? (
            Object.entries(decks).map(([key, value]) => (
              <DeckListItem
                key={key}
                title={value.title}
                numberOfCards={value.questions.length}
              />
            ))
          ) : (
            <Text>You have no decks! Please Add a deck!</Text>
          )}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addDeckButton}
            onPress={this.addDeckClick}
          >
            <Text>Add a Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DeckList;
