import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./DeckStyle";

class Deck extends Component {
  addCardClick = () => {
    alert("Add card button clicked!");
  };

  startQuizClick = () => {
    alert("Start quiz button clicked!");
  };

  render() {
    const { title, numberOfCards } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleFont}>{title}</Text>
        <Text style={styles.cardNumberFont}>{numberOfCards} cards</Text>
        <TouchableOpacity
          style={[styles.deckButton, styles.buttonMargin]}
          onPress={this.addCardClick}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={this.startQuizClick}
        >
          <Text>Start Quiz!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;
