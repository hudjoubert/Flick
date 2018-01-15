import axios from 'axios';

const GET_DATA = 'GET_DATA';
const GET_PHOTOS = 'GET_PHOTOS';

export const getData = () => {
    const requestData = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type: GET_DATA,
        payload: requestData
    }
}

export const getPhotos = () => {
    const requestPhotos = axios.get('https://daft-punk-api.herokuapp.com/');
    return {
        type: GET_PHOTOS,
        payload: requestPhotos
    }
}
