import React from 'react';

import { Container,Btn ,ButtonText} from './style';

interface BotaoVerdeProps {
    textoBotao: string;
    onPress: () => void;
  }
  
const BotaoVerde: React.FC<BotaoVerdeProps> = ({ textoBotao, onPress}) => {
    
    return (
        <Container>
        <Btn onPress={onPress}>
            <ButtonText>{textoBotao}</ButtonText>
        </Btn>
        </Container>
    )
}


export default BotaoVerde;

