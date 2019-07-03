import React, { Component } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "./DeckStyle";
import { connect } from "react-redux";

class Deck extends Component {
  startQuizClick = () => {
    alert("Start quiz button clicked!");
  };

  render() {
    const { id, numberOfCards, navigate } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleFont}>{id}</Text>
          <Text style={styles.cardNumberFont}>{numberOfCards} cards</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.deckButton, styles.buttonMargin]}
            onPress={() => {
              navigate("NewCard", { id });
            }}
          >
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deckButton}
            onPress={() => {
              navigate("Quiz", { id, refresh: false });
            }}
          >
            <Text>Start Quiz!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

mapStateToProps = ({ decks }, props) => {
  const { id } = props.navigation.state.params;
  const { navigate } = props.navigation;

  return {
    id,
    navigate,
    numberOfCards: decks[id].questions.length
  };
};

export default connect(mapStateToProps)(Deck);
