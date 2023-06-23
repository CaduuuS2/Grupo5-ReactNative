import styled from "styled-components/native"

export const Container = styled.View<{ inputWidthPercent: number }>`
  height: 20%;
  width: ${(props) => props.inputWidthPercent || 30}%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-color: #073528;
  border-width: 1px;
  border-radius: 25px;
  padding: 3px;
 
`;

export const TxtWhite = styled.Text`
  color: white;
`

export const TxtInputWhite = styled.TextInput`
  color: white;  
`

export const TxtBlack = styled(TxtWhite)`
  color: black;
`

export const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(52, 52, 52, 0.8);
  align-items: center;
  justify-content: flex-end;
`

export const ViewInputModal = styled.View`
  align-items: center;
  background-color: #073528;
  color: white;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
`