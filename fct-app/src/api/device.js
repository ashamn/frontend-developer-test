import axios from 'axios';
import { config } from './config';

export const device = (url) =>
    axios.get(`${config.baseURL}${url}`);

export const notify = ({ url, data, token }) =>
    axios.post(`${config.baseURL}${url}`, data, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    });