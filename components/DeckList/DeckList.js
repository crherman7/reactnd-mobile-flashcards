import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./DeckListStyle";

class DeckList extends Component {
  addDeckClick = () => {
    alert("Clicked button!");
  };
  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        {decks ? (
          decks.map(deck => {
            <DeckListItem />;
          })
        ) : (
          <Text>You have no decks! Please Add a deck!</Text>
        )}
        <TouchableOpacity
          style={styles.addDeckButton}
          onPress={this.addDeckClick}
        >
          <Text>Add a Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckList;
