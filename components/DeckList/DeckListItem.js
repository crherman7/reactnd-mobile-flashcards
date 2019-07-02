import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./DeckListItemStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeckListItem extends Component {
  render() {
    const { title, numberOfCards } = this.props;

    return (
      <TouchableOpacity style={styles.container}>
        <Text>{title}</Text>
        <Text>{numberOfCards}</Text>
      </TouchableOpacity>
    );
  }
}

export default DeckListItem;
