import axios from 'axios';

const url = 'http://localhost:8080/'

export const fetch = () => axios.get(url)

export const post = (data) => axios.post(url, data) 