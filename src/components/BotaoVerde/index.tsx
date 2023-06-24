import React from 'react';

import { Container,Btn ,ButtonText} from './style';

interface BotaoVerdeProps {
    textoBotao ?: string;
  }
  
const BotaoVerde: React.FC<BotaoVerdeProps> = ({ textoBotao }) => {
    
    return (
        <Container>
        <Btn>
            <ButtonText>{textoBotao}</ButtonText>
        </Btn>
        </Container>
    )
}


export default BotaoVerde;

