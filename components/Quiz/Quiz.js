import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "../Card/Card";

class Quiz extends Component {
  state = {
    cardNumber: 1,
    correct: 0
  };

  calculatePercentage = () => {
    const { cardNumber, correct } = this.state;

    return correct / cardNumber;
  };

  iterateCardNumber = () => {
    const { cardNumber } = this.state;

    this.setState({ cardNumber: cardNumber + 1 });
  };

  render() {
    const { questions } = this.props;
    const currentQuestion = questions[0];
    return (
      <View>
        <Card {...currentQuestion} />
      </View>
    );
  }
}

export default Quiz;
