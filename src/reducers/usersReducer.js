import {ERROR_USERS, GET_USERS, LOADING_USERS} from "../types/usersTypes";

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };

        case LOADING_USERS:
            return {
                ...state,
                loading: true
            };

        case ERROR_USERS:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state
    }
}
