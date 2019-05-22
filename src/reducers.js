import { CHANGE_SEARCH_FEILD } from './constants.js';

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FEILD:
          return Object.assign({}, state, { searchField: action.payload });
        default:
          return state;
    }
}