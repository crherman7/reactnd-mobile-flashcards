import React, { Component } from "react";
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import styles from "./DeckStyle";
import { connect } from "react-redux";

class Deck extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 3000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    const { id, numberOfCards, navigate } = this.props;
    let { fadeAnim } = this.state;

    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
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
            <Text>Add Flashcard</Text>
          </TouchableOpacity>
          {numberOfCards > 0 ? (
            <TouchableOpacity
              style={styles.deckButton}
              onPress={() => {
                navigate("Quiz", { id, refresh: false });
              }}
            >
              <Text>Start Quiz!</Text>
            </TouchableOpacity>
          ) : (
            <Text>Add a flashcard to be able to start quiz!</Text>
          )}
        </View>
      </Animated.View>
    );
  }
}

mapStateToProps = ({ decks }, props) => {
  const { id } = props.navigation.state.params;
  const { navigate } = props.navigation;

  return {
    id,
    navigate,
    numberOfCards: decks[id] && decks[id].questions.length
  };
};

export default connect(mapStateToProps)(Deck);
