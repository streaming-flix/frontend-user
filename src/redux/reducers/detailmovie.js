import { GET_BY_ID } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_BY_ID:
            return actions.data;

        default:
            return state;
    }
};
