import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from "../types/decks";

const decks = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      const { card, deckId } = action;

      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat([card])
        }
      };
    case ADD_DECK:
      const { deck } = action;

      return {
        ...state,
        [deck.id]: deck
      };
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    default:
      return state;
  }
};

export default decks;
