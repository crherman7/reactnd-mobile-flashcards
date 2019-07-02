import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./CardStyle";

class Card extends Component {
  state = {
    questionView: true
  };

  correctButtonClicked = () => {
    alert("Correct button clicked!");
  };

  incorrectButtonClicked = () => {
    alert("Incorrect button clicked!");
  };

  render() {
    // const { question, answer } = this.props;
    const { questionView } = this.state;

    const question = "What is your name?";
    const answer = "Chris";
    return (
      <View style={styles.container}>
        {questionView ? (
          <View style={styles.textContainer}>
            <Text style={styles.topFont}>{question}</Text>
            <TouchableOpacity
              onPress={() => this.setState({ questionView: !questionView })}
            >
              <Text>Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.topFont}>{answer}</Text>
            <TouchableOpacity
              onPress={() => this.setState({ questionView: !questionView })}
            >
              <Text>Question</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.correctButtonClicked}
          >
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.incorrectButtonClicked}
          >
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Card;
