
export class Produto {
  map(arg0: (produto: Produto) => Produto) {
    throw new Error('Method not implemented.');
  }
  filter(arg0: (produto: Produto) => boolean) {
    throw new Error('Method not implemented.');
  }
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