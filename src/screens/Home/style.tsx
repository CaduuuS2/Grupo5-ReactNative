import {View, Image, Text} from 'react-native'
import Swiper from 'react-native-swiper';
import styled from "styled-components/native"




export const Container = styled.View`
  flex: 1;
  background-color: #bd6f29;
  align-items: center;
  justify-content: center;
  
  
`;

export const Topo = styled.View`
  flex: 1;
  background-color #aafdfd;
  
  
  
  




`
export const ConteudoPrincipal = styled.View`
  padding: 1%;
  


`

export const Textos = styled.Text`
  
  font-size: 20px;
  background-color:#ffffff
  
  
  
  
`;

export const BlocoConteudos = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 3%;
  margin: 4%;
  border-radius: 20px;
  top: 10px;
`;


export const BlocoTextos = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
  
  


`;

export const BlocoImagem = styled.Image`
  width: 30%;
  height: 98%;
  margin-right: 2%;
  
`;

export const Botoes = styled.TouchableOpacity`
  background-color: #053728
  width:42%;
  align-items:center;
  border-radius: 10px;
  height:140%;
  margin-right:6%
  flex-direction: row;
  justify-content:center;
  
  


`;
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

export const Carrossel = styled(Swiper)`
  background-color: #00ff00;
  height: 200px;
  bottom: 10px;
  
  



  
  

`;
export const Slide = styled.View`
  flex:1;
  
  background-color: #aaff22;
  
  


`;

export const SlideImagens = styled.Image`
  background-color: #00f0ff;
  height: 100%;
  width: 100%;
  resize-mode: cover;

  


`;


export const BlocoSlides = styled.View`
  height: 50%;
  background-color: #ff0000;
  bottom: 2%;

  
`;

export const Blocotopo = styled.View`
  background-color: #0000ff
  height: 20%;

`
















