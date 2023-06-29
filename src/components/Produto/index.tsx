import React, {useState} from 'react';
import { Container, BlocoImagem, BlocoBotoes, Botoes, BlocoTextos, BlocoDados, TituloNome, TituloPreco } from './style'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Produto = () => {
    const [favorito, setFavorito] = useState(false);
    const handleFavorito = () => {
        if (!favorito) {
        setFavorito(true);
        } else {
            setFavorito(false);
        }
    }

    const handleCarrinho = () => {
    }

    return (
        <Container>
            <BlocoImagem source={require('../../../assets/img/buck.png')}></BlocoImagem>
            <BlocoDados>
                <BlocoTextos>
                        <TituloNome>Nome: Harry Potter</TituloNome>
                        <TituloPreco>Valor: 49,90</TituloPreco>
                </BlocoTextos>
                <BlocoBotoes>
                    <Botoes onPress={handleCarrinho} style={{width: 151}}>
                        <MaterialIcons name="add-shopping-cart" size={24} color="white" />
                    </Botoes>
                    <Botoes onPress={handleFavorito} style={{ width: 30, borderRadius: 15, backgroundColor: '#DDDDDD' }}>
                        {!favorito ? <AntDesign name="heart" size={24} color="gray" /> : <AntDesign name="heart" size={24} color="red" />}  
                    </Botoes>
                </BlocoBotoes>
            </BlocoDados>
        </Container>
    )
}
export default Produto;