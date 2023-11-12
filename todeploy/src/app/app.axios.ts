import axios from "axios"

export const urlApi = 'https://api-minibiblio.onrender.com'

const http = axios.create({
    baseURL : urlApi,
    timeout : 15000,
    headers: {'Authorization': '*'}
})

export default http
