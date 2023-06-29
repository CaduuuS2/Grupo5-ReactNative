import { Produto } from "../classes/produto";

export const listaProdutos = [
  {
    id: 1,
    nome: 'produto 1',
    categoria: 1,
    descricao: 'descricao 1',
    favorito: false,
    noCarrinho: false,
    url: 'http://',
    preco: 12.90
  }, {
    id: 2,
    nome: 'produto 2',
    categoria: 1,
    descricao: 'descricao 2',
    favorito: false,
    noCarrinho: false,
    url: 'http://',
    preco: 16.90
  }, {
    id: 3,
    nome: 'produto 3',
    categoria: 1,
    descricao: 'descricao 3',
    favorito: false,
    noCarrinho: false,
    url: 'http://',
    preco: 11.90
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
      produto.noCarrinho,
      produto.url,
      produto.preco
    )
)
