import axios from 'axios';
import {ERROR_POSTS, UPDATED, LOADING_POSTS} from "../types/postsTypes";
import * as usersTypes from '../types/usersTypes';

const {GET_USERS} = usersTypes;

export const getPostsByUser = key => async (dispatch, getState) => {

    dispatch({
        type: LOADING_POSTS
    });

    const {users} = getState().usersReducer;
    const {posts} = getState().postsReducer;
    const userId = users[key].id;

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const news = response.data.map(post => ({
                ...post,
                comments: [],
                open: false
            }
        ));

        const posts_updated = [
            ...posts,
            news
        ];

        dispatch({
            type: UPDATED,
            payload: posts_updated
        });

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
    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR_POSTS,
            payload: 'Publicaciones no disponibles'
        })
    }

};

export const openClose = (posts_key, key) => (dispatch,getState) => {
    const {posts} =getState().postsReducer;
    const selected = posts[posts_key][key];

    const updated = {
        ...selected,
        opened: !selected.opened
    };

    const posts_updated = [...posts];
    posts_updated[posts_key] = [
        ...posts[posts_key]
    ];

    posts_updated[posts_key][key] = updated;

    dispatch({
        type: UPDATED,
        payload: posts_updated
    });
};