import axios from 'axios';
import {ERROR_POSTS, GET_POSTS} from "../types/postsTypes";

export const getPosts = () => async dispatch => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        dispatch({
            type: GET_POSTS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: ERROR_POSTS,
            payload: e.message
        })
    }
};