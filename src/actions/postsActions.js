import axios from 'axios';
import {GET_BY_USER} from "../types/postsTypes";
import * as usersTypes from '../types/usersTypes';

const {GET_USERS} = usersTypes;

export const getPostsByUser = key => async (dispatch, getState) => {
    const {users} = getState().usersReducer;
    const {posts} = getState().postsReducer;
    const userId = users[key].id;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const posts_updated = [
        ...posts,
        response.data
    ];

    const posts_key = posts_updated.length - 1;

    const users_updated = [...users];

    users_updated[key] = {
        ...users[key],
        posts_key
    };

    dispatch({
        type: GET_USERS,
        payload: users_updated
    });

    dispatch({
        type: GET_BY_USER,
        payload: posts_updated
    });
};

