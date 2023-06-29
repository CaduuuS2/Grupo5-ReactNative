import axios from "axios";


export const Api=axios.create({
    baseURL : 'http://187.58.100.32:8085/g5'
})