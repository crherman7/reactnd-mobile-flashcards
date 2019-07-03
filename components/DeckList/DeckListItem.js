import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./DeckListItemStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeckListItem extends Component {
  render() {
    const { id, title, numberOfCards, navigate } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigate("Deck", { id });
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Deck Name</Text>
          <Text>{title}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}># of Cards</Text>
          <Text>{numberOfCards}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default DeckListItem;
