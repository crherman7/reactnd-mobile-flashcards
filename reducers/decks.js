import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from "../types/decks";

const decks = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      const { card, id } = action;

      console.log(`ID: ${id}`);

      return {
        ...state,
        [id]: {
          ...state[id],
          questions: state[id].questions.concat([card])
        }
      };
    case ADD_DECK:
      const { deckTitle } = action;

      return {
        ...state,
        [deckTitle]: {
          title: deckTitle,
          questions: []
        }
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
