import { Api } from "./api";

export const getProduto = async () => {
    let attempts = 0;
    let data = null;
  
    while (attempts < 3) {
      try {
        const response = await Api.get('/produto/lista');
        data = response.data;
        break; // Se a solicitação for bem-sucedida, saia do loop
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        attempts += 1;
      }

    }
  
    if (data === null) {
      throw new Error('Não foi possível obter os dados após três tentativas.');
    }
  
    return data;
  };
  

  export const CadastrarUsuario = async (data: any) => {
    let tentativas = 0;
    const maxTentativas = 3;
  
    while (tentativas < maxTentativas) {
      try {
        const response = await Api.post('/usuario/cadastrar', data);
        if (response.status === 200) {
          return response.status;
        }
        // TODO Enviar para o usuário que o cadastro não funcionou, tente novamente
      } catch (erro) {
        console.error(erro);
        throw erro;
      }
  
      tentativas++;
    }
  
    // TODO Tratar o caso em que todas as tentativas falharam
  
    return null; // ou algum valor indicando falha
  };

export const getUsuario = async () => {

    try {
        const response = await Api.get(`/usuario/lista`);
        if (response.status === 200) {
            return response
        }
        // TODO Enviar para o usuario que o cadastro nao funcionou tente denovo
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

export const getCategorias = async () => {

    try {
        const response = await Api.get("/categoria/lista");
        console.log("resposta: " + response.status)
        if (response.status === 200) {
            const { data } = response
            console.log(data)
            return data
        }
        // TODO Enviar para o usuario que o cadastro nao funcionou tente denovo
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

