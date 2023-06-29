import styled from "styled-components/native"

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  align-self: center;
  
`

export const PhotoPerfil = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  object-fit: cover;
  margin-top: 15%;
  align-self: center;
`;

export const ContainerCustom = styled.View`
flex-direction:row;

width: 100%;

`

export const Label = styled.Text`
   font-Size : 20px;
   align-self: flex-start;
   
`;

export const ViewLabel = styled.View`
  width: 90%;
  margin-top: 5%;
 
 
  align-self: center;
`
export const ViewLabelCustom = styled.View`
  width: 45%;
  margin-left: 5%;
  justify-content: center;
  margin-top: 5%;
 
`



export const LabelRow = styled(Label)`
  
  
  
`
export const ViewBotao= styled.View`
  border-radius: 10px;
  margin: 20px;
  background-color: blue;
  align-self: center;
  justify-content: flex-end;
`




