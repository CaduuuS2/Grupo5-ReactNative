import React from 'react';
import { ScrollView, Text, View} from 'react-native';
import { Container, Textos, BlocoConteudos, BlocoImagem, Item, IconeImg,  BlocoBotoes, Botoes, BlocoTextos, ConteudoPrincipal } from './style'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { MaterialIcons, AntDesign  } from '@expo/vector-icons'; 

const Produto = () => {
  
  const navigation = useNavigation < NativeStackNavigationProp<StackParams>> ();
    const handleCadastro = () => {
      return (
        navigation.navigate('Cadastro')
      )
    }
    return (
        <Container>
        <ConteudoPrincipal>
          <BlocoConteudos>
            <BlocoImagem source={require('../../../assets/img/HarryPotter.png')}></BlocoImagem>
              <BlocoTextos>
                <Item>
                <Textos>Nome: Harry Potter </Textos>
                </Item>
                
                <Item>
                <Textos>Valor: 49,90</Textos>
                </Item>
                
                <BlocoBotoes>
                  
                  <Botoes onPress={handleCadastro}>
               
                  {/*<IconeImg source={require('./carrinho.png')}></IconeImg>*/}
                  
                  <Text>ADD</Text>
                  <MaterialIcons name="add-shopping-cart" size={24} color="black" />
                  
                            
                  </Botoes>


                  <Botoes onPress={handleCadastro}>
               
                    <Text>Favorito</Text>
                    <AntDesign name="heart" size={24} color="black" />
                            
                  </Botoes>
                
                
                </BlocoBotoes>

              </BlocoTextos>
            </BlocoConteudos> 

          </ConteudoPrincipal>
        </Container>
    )
}

export default Produto;