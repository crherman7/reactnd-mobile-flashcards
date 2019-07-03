import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./QuizReviewStyle";

class QuizReview extends Component {
  render() {
    const { score, id, navigate } = this.props;

    return (
      <View style={styles.container}>
        <Text> Your score is {score}% </Text>
        <TouchableOpacity
          style={styles.marginButton}
          onPress={() => this.props.refresh()}
        >
          <Text>Restart Quiz!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.marginButton}
          onPress={() => navigate("Deck", { id })}
        >
          <Text>Return to Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizReview;
