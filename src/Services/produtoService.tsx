import { IProduto } from "../model/user";
import { Api } from "./api";

export const GetProduto = async () => {
    try {
        const response = await Api.get('/produto/lista');
        const { data } = response;
        return data;
    } catch (error) {
        console.log('Error', error);
        throw error;
    }
}

export const CadastrarUsuario = async (data : any) => {
    
    try {
    const response = await Api.post('/usuario/cadastrar', data);
    if(response.status === 200) {
        return response.status
    } 
    // TODO Enviar para o usuario que o cadastro nao funcionou tente denovo
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};



