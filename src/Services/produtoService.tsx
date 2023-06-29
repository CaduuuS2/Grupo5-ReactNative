import { IProduto } from "../model/user";
import { Api } from "./api";

export const GetProduto = async () =>{
    try {
        const response = await Api.get('/produto/lista');
        const {data} = response;
        console.log(data);
        return data;
    }catch(error){
        console.log('Error', error);
        throw error;
    }
}





