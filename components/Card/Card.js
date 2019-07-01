import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Card extends Component {
  state = {
    questionView: true
  };

  correctButtonClicked = () => {};

  incorrectButtonClicked = () => {};

  render() {
    const { question, answer } = this.props;
    const { questionView } = this.state;
    return (
      <View>
        {questionView ? (
          <View>
            <Text>{question}</Text>
            <TouchableOpacity
              onPress={() => this.setState({ questionView: !questionView })}
            >
              <Text>Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text>{answer}</Text>
            <TouchableOpacity
              onPress={() => this.setState({ questionView: !questionView })}
            >
              <Text>Question</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={this.correctButtonClicked}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.incorrectButtonClicked}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;
