import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8081'
})

export const mainAPI = {
    getUser(id){
        return instance.get(`/users/${id}`)
    },
}