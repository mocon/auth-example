import constants from './constants';
import axios from 'axios';

const xhr = {
    post: (endpoint, payload) => {
        return axios.post(`${constants.apiBaseUrl}${endpoint}`, {
            payload
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
};

export default xhr;
