import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://62b1ec4620cad3685c862961.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})