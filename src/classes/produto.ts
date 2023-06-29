
export class Produto {
  public produtoId: number;
  public nome: string;
  public categoria: string;
  public descricao: string;
  public favorito: boolean;
  public noCarrinho: boolean;
  public url: string;
  public preco: number;
  public valorUnitario: number;
  public url: string;

  constructor(
    produtoId: number,
    nome: string,
    categoria: string,
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
    this.noCarrinho = noCarrinho;
    this.url = url;
    this.preco = preco;
    this.valorUnitario = valorUnitario;
    this.url = url;
  }
}
