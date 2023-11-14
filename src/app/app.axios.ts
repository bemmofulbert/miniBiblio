import axios from "axios"

export const urlApi = 'http://localhost:3000' //'https://api-minibiblio.onrender.com'//

const http = axios.create({
    baseURL : urlApi,
    timeout : 40000,
    headers: {'Authorization': '*'}
})

export default http
