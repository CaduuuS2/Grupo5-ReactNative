import { Produto } from "./produto";
import { Pedido } from "./pedido";

export class Carrinho {
  public id: number;
  public produto: Produto;
  public quantidade: number;
  public pedido: Pedido;

  constructor(
    id: number,
    produto: Produto,
    quantidade: number,
    pedido: Pedido,
      
    ) {
    this.id = id;
    this.produto = produto;
    this.quantidade = quantidade;
    this.pedido = pedido;
  }
}