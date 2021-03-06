import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./NewDeckStyle";
import { connect } from "react-redux";
import { handleAddDeck } from "../../actions/decks";

class NewDeck extends Component {
  state = {
    deckTitle: ""
  };

  submitClick = () => {
    const { deckTitle } = this.state;
    const { dispatch } = this.props;
    const { navigate } = this.props.navigation;

    dispatch(handleAddDeck(deckTitle));
    navigate("Deck", { id: deckTitle });
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
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(NewDeck);
