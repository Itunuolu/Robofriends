import { CHANGE_SEARCH_FEILD } from '_./constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})