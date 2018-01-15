import axios from 'axios';

const GET_DATA = 'GET_DATA';

export const getData = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/users')
    return{
        type: GET_DATA,
        payload: response
    }
}

