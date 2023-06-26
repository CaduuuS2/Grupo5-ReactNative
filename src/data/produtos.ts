import { Produto } from "../classes/produto";

export const listaProdutos = [
  {
    id: 1,
    nome: 'produto 1',
    categoria: 1,
    descricao: 'descricao 1',
    favorito: false,
    preco: 12.90
  }, {
    id: 2,
    nome: 'produto 2',
    categoria: 1,
    descricao: 'descricao 2',
    favorito: false,
    preco: 12.90
  }, {
    id: 3,
    nome: 'produto 3',
    categoria: 1,
    descricao: 'descricao 3',
    favorito: false,
    preco: 12.90
  }, {
    id: 4,
    nome: 'produto 4',
    categoria: 2,
    descricao: 'descricao 4',
    favorito: false,
    preco: 12.90
  },{
    id: 5,
    nome: 'produto 5',
    categoria: 2,
    descricao: 'descricao 5',
    favorito: false,
    preco: 12.90
  }, {
    id: 6,
    nome: 'produto 6',
    categoria: 3,
    descricao: 'descricao 6',
    favorito: false,
    preco: 12.90
  },{
    id: 7,
    nome: 'produto 7',
    categoria: 3,
    descricao: 'descricao 7',
    favorito: false,
    preco: 12.90
  }
]

export const produtosInit: Produto[] = listaProdutos.map(
  (produto) =>
    new Produto(
      produto.id,
      produto.nome,
      produto.categoria,
      produto.descricao,
      produto.favorito,
      produto.preco
    )
)