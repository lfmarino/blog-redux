import {
    ERROR_POSTS,
    UPDATED,
    LOADING_POSTS,
    LOADING_COMMENTS,
    ERROR_COMMENTS,
    UPDATED_COMMENTS
} from "../types/postsTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: '',
    loading_comment: false,
    error_comment: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATED:
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

        case UPDATED_COMMENTS:
            return {
                ...state,
                posts: action.payload,
                loading_comment: false
            };

        case LOADING_COMMENTS:
            return {
                ...state,
                loading_comment: true
            };

        case ERROR_COMMENTS:
            return {
                ...state,
                error_comment: action.payload,
                loading_comment: false
            };

        default:
            return state
    }
}