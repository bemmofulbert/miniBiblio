import axios from "axios"

export const urlApi = 'http://localhost:3000'// //'https://backend-oneclickwork.onrender.com/' // 'http://localhost:3000/'

const http = axios.create({
    baseURL : urlApi,
    timeout : 15000,
    headers: {'Authorization': '*'}
})

export default http
