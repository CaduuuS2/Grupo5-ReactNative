import styled from "styled-components/native"

export const Container = styled.View<{ inputWidthPercent: number }>`
  height: 60px;
  width: ${(props) => props.inputWidthPercent || 100}px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-color: #073528;
  border-width: 1px;
  border-radius: 20px;
  color: #fff;
`;

export const BtnInput = styled.TouchableOpacity<{ inputWidthPercent: number }>`
  width: ${(props) => props.inputWidthPercent || 100}px;
  padding-left: 5px
`

export const TxtGray = styled.Text`
  color: lightgray;
  font-size: 25px;
`

export const TxtInputWhite = styled.TextInput`
  color: white;
  font-size: 20px
`

export const TxtBlack = styled(TxtGray)`
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
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`