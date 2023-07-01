
export class Produto {
  public id: number;
  public nome: string;
  public categoria: string;
  public descricao: string;
  public favorito: boolean;
  public noCarrinho: boolean;
  public url: string;
  public preco: number;

  constructor(
    id: number,
    nome: string,
    categoria: string,
    descricao: string,
    favorito: boolean,
    noCarrinho: boolean,
    url: string,
    preco: number
    ) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.descricao = descricao;
    this.favorito = favorito;
    this.noCarrinho = noCarrinho;
    this.url = url;
    this.preco = preco;
  }
}