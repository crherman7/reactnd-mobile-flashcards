import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from "../types/decks";
import { showLoading, hideLoading } from "react-redux-loading";
import { saveCard, getDecks, saveDeck } from "../utils/api";

const addCard = (card, id) => {
  return {
    type: ADD_CARD,
    card,
    id
  };
};

const addDeck = deckTitle => {
  return {
    type: ADD_DECK,
    deckTitle
  };
};

export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const handleAddCard = (card, id) => {
  return dispatch => {
    dispatch(showLoading());
    return saveCard(card, id).then(() => {
      dispatch(addCard(card, id));
      dispatch(hideLoading());
    });
  };
};

export const handleAddDeck = deckTitle => {
  return dispatch => {
    dispatch(showLoading());
    return saveDeck(deckTitle).then(() => {
      dispatch(addDeck(deckTitle));
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
