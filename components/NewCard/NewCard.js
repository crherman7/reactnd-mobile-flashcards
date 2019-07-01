import React, { Component } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  submitClicked = () => {
    const { question, answer } = this.state;

    alert(`New card question: ${question}, answer: ${answer}`);
  };

  render() {
    return (
      <View>
        <Text>Enter new card information!</Text>
        <TextInput
          placeholder="Question"
          placeholderTextColor="#C6C6C6"
          autoCapitalize="none"
          onChangeText={text => this.setState({ question: text })}
        />
        <TextInput
          placeholder="Answer"
          placeholderTextColor="#C6C6C6"
          autoCapitalize="none"
          onChangeText={text => this.setState({ answer: text })}
        />
        <TouchableOpacity onPress={this.submitClicked}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewCard;
