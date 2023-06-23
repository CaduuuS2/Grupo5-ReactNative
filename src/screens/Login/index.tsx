import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { Container, StyledPhoto, StyledText, StyledDiv } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import Fundo from "../../components/Fundo";
import InputModal from "../../components/InputModal";
import BotaoVerde from "../../components/BotaoVerde";

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const handleCadastro = () => {
    return navigation.navigate("Cadastro");
  };
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Fundo colors={["#BD6F29", "#ffffff"]} start={[1, 0]} end={[0, 1]}>
      <Container>
        <StyledPhoto source={require("../../../assets/img/logo_size.png")} />
        <Container>
          <StyledDiv>
            <StyledText> UserName </StyledText>
          </StyledDiv>
          <InputModal
            value={name}
            placeholder={"Entre com o username:"}
            onChangeText={setName}
            keyboardType="default"
            inputWidth={170}
            
          />
          <StyledText> Senha </StyledText>
          <InputModal
            value={senha}
            placeholder={"Entre com a senha:"}
            onChangeText={setSenha}
            keyboardType="default"
            inputWidth={170}
          />
        </Container>
        <BotaoVerde textoBotao="Entrar"/>
      </Container>
    </Fundo>
  );
};

export default Login;
