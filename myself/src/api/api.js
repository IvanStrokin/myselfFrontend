import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const mainAPI = {
    getUser(id){
        return instance.get(`/user/${id}`)
    },
    
}