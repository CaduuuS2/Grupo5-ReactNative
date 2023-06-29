// import React, { useState } from 'react';
// import { ContainerProduto, BlocoImagem, BlocoBotoes, Botoes, BlocoTextos, BlocoDados, TituloNome, TituloPreco, VisorContador, TextoContador } from './style'
// import { AntDesign } from '@expo/vector-icons';

// interface ProdutoCarrinhoTipo {
//     produtoId: number;
//     nome: string;
//     quantidadeCarrinho: number;
//     valorUnitario: number;
//     url: string;
// }

// const ProdutoCarrinho: React.FC<ProdutoCarrinhoTipo> = (produtoParam) => {
//     const [favorito, setFavorito] = useState(false);
//     const [produto, setProduto] = useState(produtoParam);


//     const handleFavorito = () => {
//         if (!favorito) {
//             setFavorito(true);
//         } else {
//             setFavorito(false);
//         }
//     }

//     // const handleCarrinho = () => {
//     //     if (!noCarrinho) {
//     //         setNoCarrinho(false);
//     //     } else {
//     //         setNoCarrinho(true);
//     //     }
//     // }
//     }

//      const quantidadeItemCarrinhoContador = (itemFunction: ProdutoCarrinhoTipo, parametro: number) => {
//         if (parametro === 1 || parametro === -1) {
//             if (produto.quantidadeCarrinho > 1) {
//                 let spreadItem: ProdutoCarrinhoTipo = { ...produto }
//                 spreadItem.quantidadeCarrinho = parametro + spreadItem.quantidadeCarrinho
//                 setProduto(spreadItem)
//             } else if (produto.quantidadeCarrinho === 1 && parametro === -1) {
//                 return produto
//             } else if (produto.quantidadeCarrinho === 1 && parametro === 1) {
//                 let spreadItem: ProdutoCarrinhoTipo = { ...produto }
//                 spreadItem.quantidadeCarrinho = parametro + spreadItem.quantidadeCarrinho
//                 setProduto(spreadItem)
//             }
//             return produto
//         }
//         return produto
//     }

// return (
//     <ContainerProduto>
//         <BlocoImagem source={require('../../../assets/img/buck.png')}></BlocoImagem>
//         <BlocoDados>
//             <BlocoTextos>
//                 <TituloNome>{produto.nome}</TituloNome>
//                 <TituloPreco>{'R$ ' + produto.valorUnitario}</TituloPreco>
//             </BlocoTextos>
//             <BlocoBotoes>
//                 <Botoes onPress={() => quantidadeItemCarrinhoContador(produto, 1)} style={{ width: 30, borderBottomEndRadius: 0, borderTopEndRadius: 0 }}>
//                     <AntDesign name="plus" size={25} color="white" />
//                 </Botoes>
//                 <VisorContador>
//                     <TextoContador>
//                         {produto.quantidadeCarrinho}
//                     </TextoContador>
//                 </VisorContador>
//                 <Botoes onPress={() => quantidadeItemCarrinhoContador(produto, -1)} style={{ width: 30, marginLeft: 0, borderBottomStartRadius: 0, borderTopLeftRadius: 0 }}>
//                     <AntDesign name="minus" size={25} color="white" />
//                 </Botoes>
//                 <Botoes onPress={handleFavorito} style={{ width: 30, borderRadius: 15, backgroundColor: '#DDDDDD' }}>
//                     {!favorito ? <AntDesign name="heart" size={24} color="gray" /> : <AntDesign name="heart" size={24} color="red" />}
//                 </Botoes>
//             </BlocoBotoes>
//         </BlocoDados>
//     </ContainerProduto>
// )
// }
// export default ProdutoCarrinho;