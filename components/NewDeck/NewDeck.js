import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./NewDeckStyle";

class NewDeck extends Component {
  state = {
    deckTitle: ""
  };

  submitClick = () => {
    const { deckTitle } = this.state;

    alert(`Deck Title: ${deckTitle}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={[styles.textInput, styles.contentMargin]}
          placeholder="Deck Title"
          placeholderTextColor="#C6C6C6"
          autoCapitalize="none"
          onChangeText={text => this.setState({ deckTitle: text })}
        />
        <TouchableOpacity
          style={[styles.submitButton, styles.contentMargin]}
          onPress={this.submitClick}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewDeck;
