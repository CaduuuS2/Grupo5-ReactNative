import React, { useState } from 'react';
import { Container, ProdutoView, BotaoVerdeView, TextoPadrao, CepView, ValorFreteView, ValorTotalView, FormaDePagamentoView, TextoFormaPagamentoView, AvisoCarrinho, BotaoTipoPagamento } from './style';
import { AntDesign } from '@expo/vector-icons';
import BotaoVerde from '../../components/BotaoVerde';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import Fundo from '../../components/Fundo';

interface itemCarrinho {
    produtoId: number;
    nome: string;
    quantidadeCarrinho: number;
    valorUnitario: number;
    url: string;
}

const Carrinho = () => {
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

    let flor1 = {
        produtoId: 1,
        nome: 'Rosa Vermelha',
        quantidadeCarrinho: 3,
        valorUnitario: 12.99,
        url: 'https://exemplo.com/rosavermelha.jpg',
    };

    let flor2 = {
        produtoId: 2,
        nome: 'Lírio Branco',
        quantidadeCarrinho: 2,
        valorUnitario: 9.99,
        url: 'https://exemplo.com/liriobranco.jpg',
    };

    let flor3 = {
        produtoId: 3,
        nome: 'Orquídea Azul',
        quantidadeCarrinho: 1,
        valorUnitario: 19.99,
        url: 'https://exemplo.com/orquideaazul.jpg',
    };

    const IconeSvgPix = `
  <svg xmlns="'../../../assets/icone/pix.svg'" width="50" height="50" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="black" />
  </svg>
  `;

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
            setItensCarrinho(itensCarrinho.filter((itemFilter) => {
                return itemFilter.produtoId !== itemFunction.produtoId
            }))
        } else {
            console.log("Error: The array itensCarrinho is undefined. Please try again.")
            return
        }
    }

    const adicionarItemCarrinho = (itemFunction: any) => {
        formatarCep(cep)
        const itemCarrinho = {
            produtoId: itemFunction.produtoId,
            nome: itemFunction.nome,
            quantidadeCarrinho: 3,
            valorUnitario: itemFunction.valorUnitario,
            url: itemFunction.url,
        }
        if (itensCarrinho !== undefined) {
            let produtoExiste: boolean = false
            for (const itemForOf of itensCarrinho) {
                if (itemForOf.produtoId === itemCarrinho.produtoId) {
                    produtoExiste = true
                    break
                }
            }
            if (!produtoExiste) {
                setItensCarrinho([...itensCarrinho, itemCarrinho])
                calculoValorTotal([...itensCarrinho, itemCarrinho])
            } else {
                console.log("Error: The product already exists. Please try again.")
                return
            }
        } else {
            setItensCarrinho([itemCarrinho])
            calculoValorTotal([itemCarrinho])
        }
    }

    return (
        <Fundo colors={["#BD6F29", "#ffffff"]} start={[1, 0]} end={[0, 1]}>
            <Container>
                {(itensCarrinho !== undefined) ?
                    <>{
                        itensCarrinho.map((itemMap) =>
                            <ProdutoView key={itemMap.produtoId}>
                                <TextoPadrao>{itemMap.nome}</TextoPadrao>
                                <TextoPadrao>{itemMap.quantidadeCarrinho}</TextoPadrao>
                            </ProdutoView>
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
                        onPress={() => { setItensCarrinho([]); navigation.navigate("Home") }}
                    />
                </BotaoVerdeView>
                <BotaoVerdeView>
                    <BotaoVerde
                        textoBotao="Confirmar"
                        onPress={() => { adicionarItemCarrinho(flor1) }}
                    />
                </BotaoVerdeView>
                <BotaoVerdeView>
                    <BotaoVerde
                        textoBotao="Confirmar"
                        onPress={() => { adicionarItemCarrinho(flor2) }}
                    />
                </BotaoVerdeView>
                <BotaoVerdeView>
                    <BotaoVerde
                        textoBotao="Confirmar"
                        onPress={() => { quantidadeItemCarrinhoContador(flor1, 1) }}
                    />
                </BotaoVerdeView>
                <BotaoVerdeView>
                    <BotaoVerde
                        textoBotao="Confirmar"
                        onPress={() => { quantidadeItemCarrinhoContador(flor2, -1) }}
                    />
                </BotaoVerdeView>
            </Container>
        </Fundo>
    )
}
export default Carrinho;