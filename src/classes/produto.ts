
export class Produto {
  public produtoId: number;
  public nome: string;
  public categoria: number;
  public descricao: string;
  public favorito: boolean;
  public preco: number;
  public valorUnitario: number;
  public url: string;

  constructor(
    produtoId: number,
    nome: string,
    categoria: number,
    descricao: string,
    favorito: boolean,
    preco: number,
    valorUnitario: number,
    url: string,
    ) {
    this.produtoId = produtoId;
    this.nome = nome;
    this.categoria = categoria;
    this.descricao = descricao;
    this.favorito = favorito;
    this.preco = preco;
    this.valorUnitario = valorUnitario;
    this.url = url;
  }
}