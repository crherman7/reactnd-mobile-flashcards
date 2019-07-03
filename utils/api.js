import { AsyncStorage } from "react-native";

export const saveCard = async (card, id) => {
  const state = await AsyncStorage.getItem("DECKS")
    .then(decks => {
      return JSON.parse(decks);
    })
    .catch(error => {
      console.log("Error: ", error);
    });
  await AsyncStorage.mergeItem(
    "DECKS",
    JSON.stringify({
      [id]: {
        ...state[id],
        questions: state[id].questions.concat([card])
      }
    })
  ).catch(error => {
    console.log("Error: ", error);
  });
};

export const saveDeck = async deckTitle => {
  return await AsyncStorage.mergeItem(
    "DECKS",
    JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    })
  );
};

export const getDecks = async () => {
  return await AsyncStorage.getItem("DECKS")
    .then(decks => {
      return JSON.parse(decks);
    })
    .catch(error => {
      console.log(error);
    });
};
