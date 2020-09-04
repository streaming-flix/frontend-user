import { SEARCH_MOVIE } from '../actions';

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SEARCH_MOVIE:
            return actions.data;

        default:
            return state;
    }
};