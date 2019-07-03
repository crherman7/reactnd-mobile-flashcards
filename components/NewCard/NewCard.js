import React, { Component } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./NewCardStyle";
import { connect } from "react-redux";
import { handleAddCard } from "../../actions/decks";

class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  submitClicked = () => {
    const { question, answer } = this.state;
    const { dispatch } = this.props;
    const { navigate } = this.props.navigation;
    const { id } = this.props.navigation.state.params;

    const card = {
      question,
      answer
    };
    dispatch(handleAddCard(card, id));
    navigate("Deck", { id });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter new card information!</Text>
        <TextInput
          style={[styles.textInput, styles.contentMargin]}
          placeholder="Question"
          placeholderTextColor="#C6C6C6"
          autoCapitalize="none"
          onChangeText={text => this.setState({ question: text })}
        />
        <TextInput
          style={[styles.textInput, styles.contentMargin]}
          placeholder="Answer"
          placeholderTextColor="#C6C6C6"
          autoCapitalize="none"
          onChangeText={text => this.setState({ answer: text })}
        />
        <TouchableOpacity
          style={[styles.submitButton, styles.contentMargin]}
          onPress={this.submitClicked}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(NewCard);
