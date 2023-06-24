import React, { useState } from 'react';
import { Text, TextInput, StatusBar} from 'react-native';
import { Container, StyledInput } from './style';

// Colocar opção para mostrar ou não barra de pesquisa
    // Barra de pesquisa filtrar por nome
// Colocar opção para mostrar ou não menu hamburguer


    
const Cabecalho = ( )  => {
    return (
        <Container>
             <StatusBar  />
            <StyledInput
                placeholder='Pesquise aqui'
               
            />
        </Container>
    )
}


export default Cabecalho;