import Swiper from 'react-native-swiper';
import styled from "styled-components/native"




export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  
  
`;

export const Topo = styled.View` 
  
`
export const ConteudoPrincipal = styled.View`
  padding: 1%;
`

export const Textos = styled.Text`
  font-size: 20px;
  background-color:#ffffff;
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
  
  
`;

export const Botoes = styled.TouchableOpacity`
  background-color: #053728;
  width:42%;
  align-items:center;
  border-radius: 10px;
  height:140%;
  margin-right:6%;
  flex-direction: row;
  justify-content:center;
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
  
`;

export const Carrossel = styled(Swiper)`
  height: 200px;
  
  
`;
export const Slide = styled.View`
  flex:1;
 
 
`;

export const SlideImagens = styled.Image`
  width: 100%;
  height: 100%;
  

  
 
 
  
`;


export const BlocoSlides = styled.View`
    height: 200px;
   
`;

export const Blocotopo = styled.View`
  height: 20%;

`















