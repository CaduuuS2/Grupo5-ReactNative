import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import {
  Container,
  StyledPhoto,
  StyledText,
  StyledDiv,
  ContainerDiv,
} from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import Fundo from "../../components/Fundo";
import InputModal from "../../components/InputModal";
import BotaoVerde from "../../components/BotaoVerde";
import { Feather } from '@expo/vector-icons'; 


const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const handleCadastro = () => {
    return navigation.navigate("Cadastro");
  };
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);


  const esconderSenha = () => {
    setShowSenha(!showSenha);
  };

  return (
    <Fundo colors={["#BD6F29", "#ffffff"]} start={[1, 0]} end={[0, 1]}>
      <Container>
        <StyledPhoto source={require("../../../assets/img/logo_size.png")} />
        <Container>
          <View>
          <StyledDiv>
            <StyledText> Usuário </StyledText>
          </StyledDiv>
          <InputModal
            value={name}
            placeholder={"Entre com o username"}
            onChangeText={setName}
            keyboardType="default"
            inputWidth={246}
          />
          <StyledDiv> 
            <StyledText> Senha </StyledText>
          </StyledDiv>
          <StyledDiv>
          <InputModal
            value={senha}
            placeholder={"Entre com a senha"}
            onChangeText={setSenha}
            keyboardType="default"
            inputWidth={246}
            secureTextEntry={!showSenha}
          
          />
          <TouchableOpacity  onPress={esconderSenha}>
          <Feather name="eye-off" size={28} color="black" style={{ position: 'absolute', right: 10, bottom: 8}}/>
          </TouchableOpacity> 
        
          </StyledDiv>
          </View>
        <ContainerDiv>
          <BotaoVerde
            textoBotao="Entrar"
            onPress={() => navigation.navigate("Home")}
          />
        </ContainerDiv>
       
        <ContainerDiv>
          <BotaoVerde
            textoBotao="Cadastrar"
            onPress={() => navigation.navigate("Cadastro")}
          />
        </ContainerDiv>
        </Container>
      </Container>
    </Fundo>
  );
};

export default Login;
