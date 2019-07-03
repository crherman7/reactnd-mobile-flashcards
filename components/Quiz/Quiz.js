import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "../Card/Card";
import QuizReview from "./QuizReview";
import { connect } from "react-redux";
import styles from "./QuizStyle";

class Quiz extends Component {
  state = {
    cardNumber: 1,
    correct: 0,
    answered: 0
  };

  refresh = () => {
    this.setState(() => ({
      cardNumber: 1,
      correct: 0,
      answered: 0
    }));
  };

  calculatePercentage = () => {
    const { answered, correct } = this.state;

    try {
      return (correct / answered) * 100;
    } catch {
      return 0;
    }
  };

  answeredCorrectly = () => {
    const { correct, cardNumber, answered } = this.state;
    this.setState({
      correct: correct + 1,
      cardNumber: cardNumber + 1,
      answered: answered + 1
    });
  };

  iterateCardNumber = () => {
    const { cardNumber, answered } = this.state;

    this.setState({ cardNumber: cardNumber + 1, answered: answered + 1 });
  };

  render() {
    const { questions, id } = this.props;
    const { cardNumber, answered } = this.state;
    const { navigate } = this.props.navigation;

    const currentQuestion = questions[cardNumber - 1];

    return (
      <View style={styles.container}>
        {cardNumber === questions.length + 1 ? (
          <QuizReview
            score={this.calculatePercentage()}
            id={id}
            navigate={navigate}
            refresh={this.refresh}
          />
        ) : (
          <Card
            {...currentQuestion}
            cardsRemaining={questions.length - answered}
            iterate={this.iterateCardNumber}
            correct={this.answeredCorrectly}
          />
        )}
      </View>
    );
  }
}

mapStateToProps = ({ decks }, props) => {
  const { id } = props.navigation.state.params;
  const { questions } = decks[id];

  return {
    id,
    questions
  };
};

export default connect(mapStateToProps)(Quiz);
