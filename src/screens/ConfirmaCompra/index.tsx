import React from 'react'
import Fundo from '../../components/Fundo'
import { View, Image } from 'react-native'
import { Confirma } from './style'
import BotaoVerde from '../../components/BotaoVerde'
import { Botao } from './style'
import { Container } from '../Carrinho/style'
import { useNavigation } from "@react-navigation/native";

interface ScreenNavigationProp{
    navigate : (screen : string) => void;
  }


const ConfirmaCompra = () => {
    const {navigate} = useNavigation<ScreenNavigationProp>();
    const handleHome = () =>{
        navigate('Home')
    }
    return (
        <Fundo colors={['#BD6F29', '#ffffff']}
        start={[1, 0]}
        end={[0, 1]}>
            <Container>
                <View style={{height: 450, width: 400}}>
                <Confirma 
                    source={require('../../../assets/img/CompraConcluida.png')}
                />
                </View>
               
            <Botao>
                <BotaoVerde textoBotao='Home' 
                    onPress={handleHome}
                />
            </Botao>
            </Container>
        </Fundo>
        )
}

export default ConfirmaCompra;