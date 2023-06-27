import styled from "styled-components/native";
import { View, Image, Text } from "react-native"

export const Botoes = styled.TouchableOpacity`
  background-color: #053728;
  width: 42%;
  align-items: center;
  border-radius: 10px;
  height: 140%;
  margin-right: 6%;
  flex-direction: row;
  justify-content: center;

`

export const BlocoImagem = styled.Image`
  width: 30%;
  height: 98%;
  margin-right: 2%;
  
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ffaa44;
  align-items: center;

  
  
`;

export const ConteudoPrincipal = styled.View`
  padding: 1%;
  


`



export const Item = styled.View`
  flex: 1;
  padding: 6%;

`;
export const BlocoBotoes = styled.View`
  flex-direction:row;
  padding: 6%;
  
  
  

`;

export const IconeImg = styled.Image`
  width: 60px;
  height: 20px;
  margin: 2px;
  
`;

export const Textos = styled.Text`
  
  font-size: 15px;
  background-color: white;
  height: 20px;
  
  
`;

export const BlocoConteudos = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffff00;
  padding: 3%;
  margin: 4%;
  border-radius: 20px;
  top: 10px;
  width: 80%;
  height: 40%;
`;


export const BlocoTextos = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
  background-color: #ff22ff
  


`;




