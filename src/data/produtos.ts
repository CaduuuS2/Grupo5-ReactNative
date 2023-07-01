
import { Produto } from "../classes/produto";

export const listaProdutos = [
  {
    id: 7,
    nome: '1984',
    categoria: "4",
    descricao: '1984 é uma distopia clássica escrita por George Orwell. O livro retrata um mundo governado por um regime totalitário conhecido como o Partido. A história segue o protagonista Winston Smith.',
    favorito: false,
    noCarrinho: false,
    url: 'https://m.media-amazon.com/images/I/71GmcDRfc1L.jpg',
    preco: 39.90
  },

{
    id: 13,
    nome: 'O Poder do Agora',
    categoria: "7",
    descricao: 'Encontre inspiração para melhorar sua vida e alcançar seus objetivos. Transforme-se positivamente.',
    favorito: false,
    noCarrinho: false,
    url: 'https://m.media-amazon.com/images/I/71ef0B1lsrL.jpg',
    preco: 29.99
  },

{
    id: 12,
    nome: 'Orgulho e Preconceito',
    categoria: "5",
    descricao: 'Entregue-se ao amor e às paixões arrebatadoras. Acompanhe o crescimento dos personagens e aqueça seu coração.',
    favorito: false,
    noCarrinho: false,
    url: 'https://m.media-amazon.com/images/I/51AHB+f-0DL._SX335_BO1,204,203,200_.jpg',
    preco: 25.42
  },
  {
    id: 14,
    nome: 'A arte da imperfeição',
    categoria: "7",
    descricao: 'Encontre inspiração para melhorar sua vida e alcançar seus objetivos. Transforme-se positivamente.',
    favorito: false,
    noCarrinho: false,
    url: 'https://m.media-amazon.com/images/I/819Zlhjs-HL.jpg',
    preco: 35
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