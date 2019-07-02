import { AsyncStorage } from "react-native";

export const saveCard = (card, deckId) => {
  getDecks().then(decks => {
    const updatedDeck = {
      ...decks,
      [deckId]: {
        ...decks[deckId],
        questions: decks[deckId].questions.concat([card])
      }
    };
    await AsyncStorage.setItem("DECKS", JSON.stringify(updatedDeck))
  });
};

export const saveDeck = deck => {
    getDecks().then(decks => {
        const updatedDecks = {
            ...decks,
            [deck.id]: deck
        }
        await AsyncStorage.setItem("DECKS", JSON.stringify(updatedDecks))
    })
};

export const getDecks = async () => {
  return await AsyncStorage.getItem("DECKS").then(decks => {
    if (decks !== null) {
      return JSON.parse(decks);
    } else {
      return {};
    }
  });
};
