import axios from 'axios';
import {ERROR, GET_USERS, LOADING} from "../types/usersTypes";

export const getUsers = () => async dispatch => {
    dispatch({
        type: LOADING
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
            type:ERROR,
            payload: `Lo sentimos. Ha ocurrido un error de tipo ${e.message}`
        });
    }
};