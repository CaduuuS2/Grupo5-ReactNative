import styled from "styled-components/native";

export const Botoes = styled.TouchableOpacity`
  background-color: #053728;
  width: 42%;
  height: 100%;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
`;

export const BlocoImagem = styled.Image`
  width: 32.5%;
  height: 100%;
  border-radius: 25px;
`;

export const Container = styled.View`
  background-color: #dddddd;
  height: 150px;
  width: 92%;
  align-items: center;
  flex-direction: row;
  margin: 2%;
  padding: 2%;
  border-radius: 25px;
`;

export const BlocoBotoes = styled.View`
  flex-direction:row;
  align-items: center;
  justify-content: flex-end;
  padding: 2%;
  height: 30%;
`;

export const IconeImg = styled.Image`
  width: 60px;
  height: 20px;
  margin: 2px;
`;

export const TituloNome = styled.Text`
  font-size: 20px;
 
`;

export const TituloPreco = styled.Text`
font-size: 17px;
margin-top: 5%;

`

export const BlocoTextos = styled.View`
  width: 100%;
  height: 70%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px
 
`;

export const BlocoDados = styled.View`
height: 100%;
width: 67.5%;
flex-direction: column;
justify-content: center;
`;
