import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from "../types/decks";
import { showLoading, hideLoading } from "react-redux-loading";
import { getDecks } from "../utils/api";

const addCard = (card, deckId) => {
  return {
    type: ADD_CARD,
    //card = {question: "", answer: ""}
    card,
    deckId
  };
};

const addDeck = deck => {
  return {
    type: ADD_DECK,
    deck
  };
};

export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const handleAddCard = (card, deckId) => {
  return dispatch => {
    dispatch(showLoading());
    return saveCard(card, deckId).then(() => {
      dispatch(addCard(card, deckId));
      dispatch(hideLoading());
    });
  };
};

export const handleAddDeck = deck => {
  return dispatch => {
    dispatch(showLoading());
    return saveDeck(deck).then(() => {
      dispatch(addDeck(deck));
      dispatch(hideLoading());
    });
  };
};

export const handleReceiveDecks = () => {
  return dispatch => {
    dispatch(showLoading());
    return getDecks().then(decks => {
      dispatch(receiveDecks(decks));
      dispatch(hideLoading());
    });
  };
};
