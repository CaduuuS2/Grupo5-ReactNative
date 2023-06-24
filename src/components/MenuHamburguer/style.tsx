import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: #1A0E0E;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const StyledPhoto = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  object-fit: cover;
`;

export const ViewUser = styled.View`
  height: 10%;
  flex-direction: row;
  margin-top: 20px;
`

export const UserPhoto = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
  margin-right: 20px;
  align-self: center;
`

export const ViewUsernameEmail = styled.View`
  width: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ViewCategoria = styled.View`
  justify-content: center;
  width: 100%;
  padding: 20px;
  align-items: flex-start;
  
`

export const TextCategoria = styled.Text`
  color: white;
  margin: 5px;
  
`

export const TextItens = styled(TextCategoria)`
  
`

export const BtnIconText = styled.TouchableOpacity`
  flex-direction: row;
  margin: 3px;
  margin-left: 20px;
`
