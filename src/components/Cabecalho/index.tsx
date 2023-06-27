import React, { useState } from 'react';
import { Text, TextInput, StatusBar} from 'react-native';
import { Container, StyledInput } from './style';

// Colocar opção para mostrar ou não barra de pesquisa
    // Barra de pesquisa filtrar por nome
// Colocar opção para mostrar ou não menu hamburguer


    
const Cabecalho = ( )  => {
    const [pesquisa, setPesquisa] = useState("");
    return (
        <Container>
             <StatusBar  />
            <StyledInput
                value={pesquisa}
                placeholder={"Pesquise aqui"}
                onChangeText={setPesquisa}
                keyboardType="default"
            />
        </Container>
    )
}


export default Cabecalho;