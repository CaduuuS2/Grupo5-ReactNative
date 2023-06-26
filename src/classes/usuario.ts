
export class Usuario {
  public id: number;
  public nome: string;
  public nomeUser: string;
  public telefone: string;
  public email: string;
  public cpf: string;
  public compra: boolean;
  public venda: boolean;
  public data: string;
  public cep: string;
  public uf: string;
  public localidade: string;
  public bairro: string;
  public logradouro: string;
  public cidade: string;
  public numero: string;
  public complemento: string;
  public password: string;
  public roles: string[];
  public url: string;

  constructor(
    id: number,
    nome: string,
    nomeUser: string,
    telefone: string,
    email: string,
    cpf: string,
    compra: boolean,
    venda: boolean,
    data: string,
    cep: string,
    uf: string,
    localidade: string,
    bairro: string,
    logradouro: string,
    cidade: string,
    numero: string,
    complemento: string,
    password: string,
    roles: string[],
    url: string
  ) {

    this.id = id;
    this.nome = nome;
    this.nomeUser = nomeUser;
    this.telefone = telefone;
    this.email = email;
    this.cpf = cpf;
    this.compra = compra;
    this.venda = venda;
    this.data = data;
    this.cep = cep;
    this.uf = uf;
    this.localidade = localidade;
    this.bairro = bairro;
    this.logradouro = logradouro;
    this.cidade = cidade;
    this.numero = numero;
    this.complemento = complemento;
    this.password = password;
    this.roles = roles;
    this.url = url;
  }
}