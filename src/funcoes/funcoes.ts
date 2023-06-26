import { Produto } from '../classes/produto';

export const filtrarProdutosPorCategoria = (produtos: Produto[], categoria: number
): Produto[] => {
  const temp = produtos.filter((produto: Produto) => produto.categoria === categoria)
  return temp
}

export const favoritarProduto = (produtos: Produto[], id: number): Produto[] => {
  return produtos.map((produto: Produto) => {
    if (produto.id === id) {
      produto.favorito = true
      return produto
    }
    return produto;
  })
}