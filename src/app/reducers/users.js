import {ADD_USER, DELETE_USER, EDIT_USER, COMPLETE_USER, COMPLETE_ALL, CLEAR_COMPLETED} from '../constants/UserTypes';

const initialState = [
  {
    text: 'Use Redux2222',
    completed: false,
    id: 0
  }
];

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [
        {
          id: state.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];

    case DELETE_USER:
      return state.filter(user =>
        user.id !== action.id
      );

    case EDIT_USER:
      return state.map(user =>
        user.id === action.id ?
          Object.assign({}, user, {text: action.text}) :
          user
      );

    case COMPLETE_USER:
      return state.map(user =>
        user.id === action.id ?
          Object.assign({}, user, {completed: !user.completed}) :
          user
      );

    case COMPLETE_ALL: {
      const areAllMarked = state.every(user => user.completed);
      return state.map(user => Object.assign({}, user, {
        completed: !areAllMarked
      }));
    }

    case CLEAR_COMPLETED:
      return state.filter(user => user.completed === false);

    default:
      return state;
  }
}
