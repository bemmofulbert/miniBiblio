import axios from "axios"

export const urlApi = 'https://api-minibiblio.onrender.com' //'http://localhost:3000' //

const http = axios.create({
    baseURL : urlApi,
    timeout : 45000,
    headers: {'Authorization': '*'}
})

export default http
