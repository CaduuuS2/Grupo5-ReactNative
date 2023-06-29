export interface IUser{
    id : number;
    roles : string[];
    username : string;
    email : string;
}
export interface IProduto {
    produtoId: number;
    nome: string;
    descricao: string;
    quantidadeEstoque: number;
    data: string;
    valorUnitario: number;
    url: string;

}