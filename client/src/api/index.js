import axios from 'axios';

const url = 'http://localhost:5000/'


export const fetch = () => axios.get(url + "recognition")

export const post = (data) => axios.post(url, data)

export const get_faces = (option) => axios(option)
