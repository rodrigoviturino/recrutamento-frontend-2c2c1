import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://api.royaleapi.com/clan/'
})