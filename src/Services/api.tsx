import axios from "axios";


export const Api=axios.create({
    baseURL : 'http://187.113.116.98:8085/g5'
})