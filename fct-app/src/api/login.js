import axios from 'axios';
import { config } from './config';

export const login = ({ credentials, url }) => {
    return axios.post(`${config.baseURL}${url}`, credentials)
}
