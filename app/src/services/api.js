import axios from 'axios';

export const api =  axios.create({
    baseURL:  `https://outros.opea-uat.solutions/prova/front/api/clients`,
    timeout: 10000,
    headers: { 'Content-type': 'application/json' }
});