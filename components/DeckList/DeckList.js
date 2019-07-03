import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./DeckListStyle";
import DeckListItem from "./DeckListItem";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { handleReceiveDecks } from "../../actions/decks";
import { isEmpty } from "lodash";

class DeckList extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch(handleReceiveDecks());
  };

  render() {
    const { decks, navigate } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.listContainer}
          contentContainerStyle={styles.center}
        >
          {isEmpty(decks) ? (
            <Text>You have no decks! Please Add a deck!</Text>
          ) : (
            Object.entries(decks).map(([key, value]) => (
              <DeckListItem
                key={key}
                id={key}
                title={value.title}
                numberOfCards={value.questions.length}
                navigate={navigate}
              />
            ))
          )}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addDeckButton}
            onPress={() => navigate("NewDeck")}
          >
            <Text>Add a Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

mapStateToProps = ({ decks }, props) => {
  const { navigate } = props.navigation;

  return {
    decks,
    navigate
  };
};

export default connect(mapStateToProps)(DeckList);
