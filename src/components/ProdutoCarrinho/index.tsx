import React, {useState} from 'react';
import { Container, BlocoImagem, BlocoBotoes, Botoes, BlocoTextos, BlocoDados, TituloNome, TituloPreco, VisorContador, TextoContador } from './style'
import { AntDesign } from '@expo/vector-icons';

interface ProdutoCarrinhoTipo {
    produtoId: number;
    nome: string;
    quantidadeCarrinho: number;
    valorUnitario: number;
    url: string;
}

const ProdutoCarrinho: React.FC<ProdutoCarrinhoTipo>  = ( produto ) => {
    const [favorito, setFavorito] = useState(false);
    const [quantidade, setQuantidade] = useState(1);

    const handleFavorito = () => {
        if (!favorito) {
        setFavorito(true);
        } else {
            setFavorito(false);
        }
    }

    const handleContador = (parametro: number ) => {
        setQuantidade(parametro + quantidade);
    }

    return (
        <Container>
            <BlocoImagem source={require('../../../assets/img/buck.png')}></BlocoImagem>
            <BlocoDados>
                <BlocoTextos>
                        <TituloNome>{produto.nome}</TituloNome>
                        <TituloPreco>{'R$ ' + produto.valorUnitario}</TituloPreco>
                </BlocoTextos>
                <BlocoBotoes>
                    <Botoes onPress={() => handleContador(1)} style={{width: 30, borderBottomEndRadius: 0, borderTopEndRadius: 0}}>
                    <AntDesign name="plus" size={25} color="white" />
                    </Botoes>
                    <VisorContador>
                        <TextoContador>
                            {produto.quantidadeCarrinho}
                        </TextoContador>
                    </VisorContador>
                    <Botoes onPress={() => handleContador(-1)} style={{width: 30, marginLeft: 0, borderBottomStartRadius: 0, borderTopLeftRadius: 0}}>
                        <AntDesign name="minus" size={25} color="white" /> 
                    </Botoes>
                    <Botoes onPress={handleFavorito} style={{ width: 30, borderRadius: 15, backgroundColor: '#DDDDDD' }}>
                        {!favorito ? <AntDesign name="heart" size={24} color="gray" /> : <AntDesign name="heart" size={24} color="red" />}  
                    </Botoes>
                </BlocoBotoes>
            </BlocoDados>
        </Container>
    )
}
export default ProdutoCarrinho;