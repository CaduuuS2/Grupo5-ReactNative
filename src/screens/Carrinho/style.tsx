import styled from "styled-components/native"

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: flex-start;
align-self: center;
margin-top: 10%;
width: 100%;
`;
export const ValorFreteView = styled.View`
align-items: flex-start;
`;
export const ValorTotalView = styled.View`
align-items: flex-start;
`;
export const TextoFormaPagamentoView = styled.View`
  flex-direction: column; 
  justify-content: space-between;
  width: 80%;
`;
export const FormaDePagamentoView = styled.View`
  flex-direction: row;
  justify-Content: space-between;
  align-Items: center;
  margin: 15px;
`;
export const BotaoVerdeView = styled.View`
margin: 10px;
`;
export const TextoPadrao = styled.Text`
 font-size : 23px;
 text-align: center;
 align-items: center;
`;
export const CepView = styled.View` 
align-items: flex-start;
`;
export const AvisoCarrinho = styled.View`
align-items: center;
width: 80%;
margin: 15px;
`;
export const BotaoTipoPagamento = styled.TouchableOpacity`
margin: 10px;
`;

//Styled Produto
export const Botoes = styled.TouchableOpacity`
  background-color: #053728;
  width: 42%;
  height: 25px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 6.5%;
`;
export const BlocoImagem = styled.Image`
  width: 32.5%;
  height: 100%;
  border-radius: 25px;
`;
export const ContainerProduto = styled.View`
  background-color: #dddddd;
  height: 155px;
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
  width: 70%;
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
`;
export const BlocoTextos = styled.View`
  width: 100%;
  height: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const BlocoDados = styled.View`
height: 100%;
width: 67.5%;
flex-direction: column;
justify-content: center;
`;
export const VisorContador = styled.View`
background-color: #ffffff;
width: 33%;
align-items: center;
height: 25px;
`;
export const TextoContador = styled.Text`
font-size: 20px;
font-weight: bold;
color: #000000;
`;