import React from 'react'
import { Text } from 'react-native';
import { Container } from './style';
import BotaoVerde from '../../components/BotaoVerde/index';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <Container>
      <BotaoVerde
            textoBotao="Entrar"
            onPress={() => navigation.navigate("Carrinho")}
          />
    </Container>
  )
}

export default Home;