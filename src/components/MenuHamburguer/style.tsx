import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  width: 70%;
  background-color: #1A0E0E;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const StyledPhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 75px;
  object-fit: cover;
  margin-top: 20px;
`

export const ViewUser = styled.View`
  height: auto;
  flex-direction: row;
  justify-content:flex-end;
  align-items: flex-end;
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
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ViewCategoria = styled.View`
  justify-content: center;
  flex: 1;
  padding: 20px;
  align-items: flex-start;
  
`

export const ViewCategoriaA = styled.View`
  justify-content: center;
  flex: 2;
  padding: 20px;
  align-items: flex-start;
  
`

export const TextCategoria = styled.Text`
  color: white;
  margin: 5px;
`

export const TextItens = styled(TextCategoria)`
`

export const TextMargin = styled(TextCategoria)`
`

export const BtnIconText = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 20px;
`
