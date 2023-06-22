import React from 'react';
import { Text } from 'react-native';
import { Container } from './style';


const Produto = () => {
    
    const mock = {
        nome: "Harry Potrer",
        descricao: "Livro muito legal",
        favorito: false,
        preco: 198.99
    }
    
    return (
        <Container>
            <Text>Produto</Text>
        </Container>
    )
}


export default Produto;