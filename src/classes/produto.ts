
export class Produto {
  public id: number;
  public nome: string;
  public categoria: number;
  public descricao: string;
  public favorito: boolean;
  public preco: number;

  constructor(
    id: number,
    nome: string,
    categoria: number,
    descricao: string,
    favorito: boolean,
    preco: number,
    ) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.descricao = descricao;
    this.favorito = favorito;
    this.preco = preco;
  }
}