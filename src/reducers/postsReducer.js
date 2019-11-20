import {ERROR_POSTS, GET_POSTS, LOADING_POSTS} from "../types/postsTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };

        case LOADING_POSTS:
            return {
                ...state,
                loading: true
            };

        case ERROR_POSTS:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state
    }
}