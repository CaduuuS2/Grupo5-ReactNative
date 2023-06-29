import React, { useContext, useEffect, useState } from 'react';
import {
    Container, BotaoVerdeView, TextoPadrao, CepView, ValorFreteView, ValorTotalView,
    FormaDePagamentoView, TextoFormaPagamentoView, AvisoCarrinho, BotaoTipoPagamento,
    ContainerProduto, BlocoImagem, BlocoBotoes, Botoes, BlocoTextos, BlocoDados, TituloNome,
    TituloPreco, VisorContador, TextoContador
} from './style';
import { AntDesign } from '@expo/vector-icons';
import BotaoVerde from '../../components/BotaoVerde';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from '../../routes/rotasPrivadas';
import { useNavigation } from "@react-navigation/native";
import Fundo from '../../components/Fundo';
import { ScrollView } from "react-native";
import { ProdutosContext } from '../../context/ProdutosProvider';
import { Produto } from '../../classes/produto';

interface itemCarrinho {
    produtoId: number;
    nome: string;
    quantidadeCarrinho: number;
    categoria: string;
    descricao: string;
    valorUnitario: number;
    url: string;
    favorito: boolean;
    noCarrinho: boolean;
}
//comentario
const Carrinho = (itemFunctionComponente: itemCarrinho[]) => {
    const [valorFrete, setValorFrete] = useState<string>() //Não formatado
    const [valorTotal, setValorTotal] = useState<string>() //Formatado
    const [itensCarrinho, setItensCarrinho] = useState<itemCarrinho[]>()
    const [cepFormatado, setCepFormatado] = useState<string>()
    let cep: number = 95725029
    let frete: number
    const freteSuldeste: number = 0.00 //Poderia vir da API
    const freteNorte: number = 99.99 //Poderia vir da API
    const freteCentroOeste: number = 49.99 //Poderia vir da API
    const freteNordeste: number = 79.99 //Poderia vir da API
    const freteSul: number = 19.99 //Poderia vir da AP  
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const { produtos, setProdutos } = useContext(ProdutosContext)

    const formatarValor = (valor: number) => {
        const valorFormatado = Number(valor.toFixed(2));
        return valorFormatado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const formatarCep = (cep: number) => {
        const cepString: string = cep.toString()
        const cepFormatado = cepString.slice(0, 5) + '-' + cepString.slice(5)
        return setCepFormatado(cepFormatado)
    }

    const calculoValorFrete = () => {
        if (cep !== undefined && cep) {
            if (cep >= 1000000 && cep <= 39999999) {
                frete = freteSuldeste
                setValorFrete(formatarValor(freteSuldeste))

            } else if (cep >= 80000000 && cep <= 99999999) {
                frete = freteSul
                setValorFrete(formatarValor(freteSul))

            } else if (cep >= 40000000 && cep <= 65999999) {
                frete = freteNordeste
                setValorFrete(formatarValor(freteNordeste))

            } else if ((cep >= 66000000 && cep <= 69999999) || (cep >= 76800000 && cep <= 77999999)) {
                frete = freteNorte
                setValorFrete(formatarValor(freteNorte))

            } else if ((cep >= 70000000 && cep <= 76799999) || (cep >= 78000000 && cep <= 79999999)) {
                frete = freteCentroOeste
                setValorFrete(formatarValor(freteCentroOeste))
            } else {
                console.log("Error: The Cep is not valid. Please try again.")
                return
            }
        } else {
            console.log("Error: The cep is undefined. Please try again.")
            return
        }
    }

    const calculoValorTotal = (itensFunction: itemCarrinho[]) => {
        calculoValorFrete()
        let valorTotalParametro: number = itensFunction.reduce((acumuladorReduce, itemReduce) => {
            return acumuladorReduce + itemReduce.valorUnitario * itemReduce.quantidadeCarrinho
        }, 0) + frete
        setValorTotal(formatarValor(valorTotalParametro))
    }

    const quantidadeItemCarrinhoContador = (itemFunction: itemCarrinho, parametro: number) => {
        if (parametro === 1 || parametro === -1) {
            if (itensCarrinho !== undefined) {
                const MapItensCarrinho = itensCarrinho.map((itemMap) => {
                    if (itemMap.produtoId === itemFunction.produtoId) {
                        if (itemMap.quantidadeCarrinho > 1) {
                            let spreadItemMap: itemCarrinho = { ...itemMap }
                            spreadItemMap.quantidadeCarrinho = parametro + spreadItemMap.quantidadeCarrinho
                            return spreadItemMap
                        } else if (itemMap.quantidadeCarrinho === 1 && parametro === -1) {
                            return itemMap
                        } else if (itemMap.quantidadeCarrinho === 1 && parametro === 1) {
                            let spreadItemMap: itemCarrinho = { ...itemMap }
                            spreadItemMap.quantidadeCarrinho = parametro + spreadItemMap.quantidadeCarrinho
                            return spreadItemMap
                        }
                        return itemMap
                    }
                    return itemMap
                })
                setItensCarrinho(MapItensCarrinho)
                calculoValorTotal(MapItensCarrinho)
            } else {
                console.log("Error: The array quantidadeItemCarrinhoArray is undefined. Please try again.")
                return
            }
        } else {
            console.log("Error: The parametro is not valid. Please try again.")
            return
        }
    }

    const excluirItemCarrinho = (itemFunction: itemCarrinho) => {
        if (itensCarrinho !== undefined) {
            const itemFunctionParseId = itemFunction.produtoId 
            let itemFunctionObjetoValido: Produto = {} as Produto
            for (const itemForOf of produtos) {
                if (itemForOf.id === itemFunctionParseId) {
                    itemForOf.noCarrinho = false;
                  itemFunctionObjetoValido = itemForOf;
                }
              }

            setProdutos([...produtos.filter((itemFilter) => { return itemFilter.id !== itemFunctionParseId}), itemFunctionObjetoValido])
            setItensCarrinho(itensCarrinho.filter((itemFilter) => {
                return itemFilter.produtoId !== itemFunction.produtoId
            }))
            console.log(itemFunctionObjetoValido);
        } else {
            console.log("Error: The array itensCarrinho is undefined. Please try again.")
            return
        }
    }

    const adicionarItemCarrinho = () => {
        formatarCep(cep)
        const produtosFiltered = produtos.filter((itemFilter) => itemFilter.noCarrinho === true)
        const produtosObjetosValidos = produtosFiltered.map((itemMap) => ({
            produtoId: itemMap.id,
            nome: itemMap.nome,
            quantidadeCarrinho: 1,
            categoria: itemMap.categoria,
            descricao: itemMap.descricao,
            valorUnitario: itemMap.preco,
            url: itemMap.url,
            favorito: itemMap.favorito,
            noCarrinho: itemMap.noCarrinho
        }))
        calculoValorTotal(produtosObjetosValidos)
        setItensCarrinho(produtosObjetosValidos)
    }

    const handleFavorito = (itemFunction: itemCarrinho) => {
        if (itemFunction.favorito === false && itensCarrinho !== undefined) {
            const spreaditemFunction = { ...itemFunction }
            spreaditemFunction.favorito = true
            const newItensCarrinho = itensCarrinho.map((itemMap) => itemMap.produtoId === spreaditemFunction.produtoId ? spreaditemFunction : itemMap)
            setItensCarrinho(newItensCarrinho)
        } else if (itemFunction.favorito === true && itensCarrinho !== undefined) {
            const spreaditemFunction = { ...itemFunction }
            spreaditemFunction.favorito = false
            const newItensCarrinho = itensCarrinho.map((itemMap) => itemMap.produtoId === spreaditemFunction.produtoId ? spreaditemFunction : itemMap)
            setItensCarrinho(newItensCarrinho)
        }
    }

    useEffect(() => {
        adicionarItemCarrinho()
    }, [])

    return (
        <ScrollView>
            <Fundo colors={["#BD6F29", "#ffffff"]} start={[1, 0]} end={[0, 1]}>
                <Container>
                    {(itensCarrinho !== undefined) ?
                        <>{
                            itensCarrinho.map((itemMap) =>
                                <ContainerProduto>
                                    <BlocoImagem source={require('../../../assets/img/buck.png')}></BlocoImagem>
                                    <BlocoDados>
                                        <BlocoTextos>
                                            <TituloNome>{itemMap.nome}</TituloNome>
                                            <TituloPreco>{'R$ ' + itemMap.valorUnitario}</TituloPreco>
                                        </BlocoTextos>
                                        <BlocoBotoes>
                                            <Botoes onPress={() => quantidadeItemCarrinhoContador(itemMap, 1)} style={{ width: 25, borderBottomEndRadius: 0, borderTopEndRadius: 0 }}>
                                                <AntDesign name="plus" size={25} color="white" />
                                            </Botoes>
                                            <VisorContador>
                                                <TextoContador>
                                                    {itemMap.quantidadeCarrinho}
                                                </TextoContador>
                                            </VisorContador>
                                            <Botoes onPress={() => quantidadeItemCarrinhoContador(itemMap, -1)} style={{ width: 25, marginLeft: 0, borderBottomStartRadius: 0, borderTopLeftRadius: 0 }}>
                                                <AntDesign name="minus" size={25} color="white" />
                                            </Botoes>
                                            <Botoes onPress={() => excluirItemCarrinho(itemMap)} style={{ width: 25, borderRadius: 15, backgroundColor: '#DDDDDD' }}>
                                                <AntDesign name="delete" size={24} color="gray" />
                                            </Botoes>
                                            <Botoes onPress={() => handleFavorito(itemMap)} style={{ width: 25, borderRadius: 15, backgroundColor: '#DDDDDD' }}>
                                                {itemMap.favorito === false ? <AntDesign name="heart" size={24} color="gray" /> : <AntDesign name="heart" size={24} color="red" />}
                                            </Botoes>
                                        </BlocoBotoes>
                                    </BlocoDados>
                                </ContainerProduto>
                            )}
                        </>
                        :
                        <AvisoCarrinho>
                            <TextoPadrao>Seu carrinho está vazio, visite nossa página principal e escolha um produto de sua preferência ;)</TextoPadrao>
                        </AvisoCarrinho>
                    }
                    <TextoFormaPagamentoView>
                        <CepView>
                            <TextoPadrao>CEP: {cepFormatado}</TextoPadrao>
                        </CepView>
                        <ValorFreteView>
                            <TextoPadrao>Frete:{valorFrete}</TextoPadrao>
                        </ValorFreteView>
                        <ValorTotalView>
                            <TextoPadrao>Valor Total: {valorTotal}</TextoPadrao>
                        </ValorTotalView>
                    </TextoFormaPagamentoView>
                    <FormaDePagamentoView>
                        <BotaoTipoPagamento>
                            <AntDesign name="qrcode" size={50} color="black" />
                        </BotaoTipoPagamento>
                        <BotaoTipoPagamento>
                            <AntDesign name="barcode" size={50} color="black" />
                        </BotaoTipoPagamento>
                    </FormaDePagamentoView>
                    <BotaoVerdeView>
                        <BotaoVerde
                            textoBotao="Confirmar"
                            onPress={() => { setItensCarrinho([]); navigation.navigate("ConfirmaCompra") }}
                        />
                    </BotaoVerdeView>
                </Container>
            </Fundo>
        </ScrollView>
    )
}
export default Carrinho;