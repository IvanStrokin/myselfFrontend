import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const mainAPI = {
    getUser(id){
        return instance.get(`/user/${id}`)
    },
}