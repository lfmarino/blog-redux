import axios from 'axios';
import {ERROR_USERS, GET_USERS, LOADING_USERS} from "../types/usersTypes";

export const getUsers = () => async dispatch => {
    dispatch({
        type: LOADING_USERS
    });

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: GET_USERS,
            payload: response.data
        })
    } catch (e) {
        console.log(e.message);
        dispatch({
            type:ERROR_USERS,
            payload: `Lo sentimos. Ha ocurrido un error de tipo ${e.message}`
        });
    }
};