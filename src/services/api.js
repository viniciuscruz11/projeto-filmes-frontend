import axios from "axios";

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=1c7e315c'
})

export default api