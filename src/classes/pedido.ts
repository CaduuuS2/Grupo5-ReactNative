import { Produto } from "./produto";
import { Usuario } from "./usuario";

export class Pedido {
  public id: number;
  public data: string;
  public usuario: Usuario;

  constructor(
    id: number,
    data: string,
    usuario: Usuario
      
    ) {
    this.id = id;
    this.data = data;
    this.usuario = usuario;
  }
}