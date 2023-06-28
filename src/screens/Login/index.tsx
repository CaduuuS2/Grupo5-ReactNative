import React, { useState, useContext} from "react";
import { Text, TouchableOpacity, Image, View, Alert } from "react-native";
import {
  Container,
  StyledPhoto,
  StyledText,
  StyledDiv,
  ContainerDiv,
  
} from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes/rotasPrivadas";
import { useNavigation } from "@react-navigation/native";
import Fundo from "../../components/Fundo";
import InputModal from "../../components/InputModal";
import BotaoVerde from "../../components/BotaoVerde";
import { Feather } from '@expo/vector-icons'; 
import { AuthContext, useAuth } from "../../context/authContext";
import {useForm, FieldValues} from 'react-hook-form';

interface ScreenNavigationProp{
  navigate : (screen : string) => void;
}
interface IFormInput {
  [name : string] : any;
  
}
const Login = () => {
  
  const {login : any} = useContext(AuthContext)
  
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const handleCadastro = () => {
    navigate("Cadastro");
  };
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [loading, setLoading] = useState(false)
  const {login} = useAuth();
  const {handleSubmit, control} = useForm<FieldValues>();
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const esconderSenha = () => {
    setShowSenha(!showSenha);
  };

  const handleEntrar = (form : IFormInput) => {
    console.log(form)
      const data={
        username: name,
        password: senha,
      }
      try{
        setLoading(true);
        login(data)
      }catch(err){
        Alert.alert('Error de autenticaçao no form ')
      }
  }

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
            placeholder={"Usuário"}
            onChangeText={setName}
            keyboardType="default"
            inputWidth={246}
            control= {control}
          />
          <StyledDiv> 
            <StyledText> Senha </StyledText>
          </StyledDiv>
          <StyledDiv>
          <InputModal
            value={senha}
            placeholder={"Senha"}
            onChangeText={setSenha}
            keyboardType="default"
            inputWidth={246}
            secureTextEntry={!showSenha}
            control={control}
          
          />
          <TouchableOpacity  onPress={esconderSenha}>
          {showSenha ? (<Feather name="eye-off" size={28} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />) : (<Feather name="eye" size={28} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />)}
          </TouchableOpacity> 
        
          </StyledDiv>
          </View>
        <ContainerDiv>
          <BotaoVerde
            textoBotao="Entrar"
            onPress={handleSubmit(handleEntrar)}
            disabled={loading}
          />
        </ContainerDiv>
       
        <ContainerDiv>
          <BotaoVerde
            textoBotao="Cadastrar"
            onPress={handleCadastro}
          />
        </ContainerDiv>
        </Container>
      </Container>
    </Fundo>
  );
};

export default Login;
