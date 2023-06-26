import React, { Dispatch, SetStateAction, useState } from 'react';
import { KeyboardTypeOptions, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, TxtBlack, TxtGray, ViewInputModal, ModalBackground, TxtInputWhite, BtnInput } from './style';

type Types = {
    value: string;
    placeholder: string;
    onChangeText?: Dispatch<SetStateAction<string>>;
    keyboardType: KeyboardTypeOptions | undefined;
    inputWidth: number;
    secureTextEntry?: boolean;
}

const InputModal = (props: Types) => {

    const [modalVisibility, setModalVisibility] = useState(false)
    const inputRef: React.RefObject<TextInput> = React.createRef()

    function setFocus() {
        setTimeout(() => inputRef.current?.focus(), 50)
    }
    
    function valueHidable() {
        if (props.secureTextEntry){
            let hide = ""
            for (let i = 0; i < props.value.length; i ++) {
                hide += "*"
            }
            return hide
        }
        return props.value
    }

    return (
        <Container inputWidthPercent={props.inputWidth}>
            <BtnInput
                inputWidthPercent={props.inputWidth}                
                activeOpacity={1}
                onPress={() => setModalVisibility(true)}>
                {props.value === ''
                    ? (<TxtGray>{props.placeholder}</TxtGray>)
                    : (<TxtBlack>{valueHidable()}</TxtBlack>)
                }
                <Modal
                    visible={modalVisibility}
                    transparent={true}
                    animationType="slide"
                    onShow={setFocus}>
                    <ModalBackground
                        onPressIn={() => setModalVisibility(false)}>
                        <ViewInputModal>
                            <View>
                                <TxtInputWhite
                                    {...props}
                                    placeholderTextColor={'#6d6d6d'}
                                    onSubmitEditing={() => setModalVisibility(false)}
                                    onBlur={() => setModalVisibility(false)}
                                    ref={inputRef} />
                            </View>
                        </ViewInputModal>
                    </ModalBackground>
                </Modal>
            </BtnInput>

        </Container>
    )
}


export default InputModal;

/* 
exemplo de como usar
** inputWidth é a porcentagem do tamanho do campo

<InputModal 
    value={name} 
    placeholder={'Entre com o email:'} 
    onChangeText={ setName }
    keyboardType='email-address'
    inputWidth={40} />
*/