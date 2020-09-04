import { GET_ALL_MOVIES, SEARCH_MOVIE } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_MOVIES:
            return actions.data;
        case SEARCH_MOVIE:
            return actions.data;

        default:
            return state;
    }
};