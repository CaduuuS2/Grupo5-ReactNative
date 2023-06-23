import React, { Dispatch, SetStateAction, useState } from 'react';
import { KeyboardTypeOptions, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, TxtBlack, TxtWhite, ViewInputModal, ModalBackground, TxtInputWhite } from './style';

type Types = {
    value: string;
    placeholder: string;
    onChangeText?: Dispatch<SetStateAction<string>>;
    keyboardType: KeyboardTypeOptions | undefined;
    inputWidth: number;
}

const InputModal = (props: Types) => {

    const [modalVisibility, setModalVisibility] = useState(false)
    const inputRef: React.RefObject<TextInput> = React.createRef()

    function setFocus() {
        setTimeout(() => inputRef.current?.focus(), 50)
    }

    return (
        <Container inputWidthPercent={props.inputWidth}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => setModalVisibility(true)}>
                {props.value === ''
                    ? (<TxtWhite>{props.placeholder}</TxtWhite>)
                    : (<TxtBlack>{props.value}</TxtBlack>)
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
                                    onSubmitEditing={() => setModalVisibility(false)}
                                    onBlur={() => setModalVisibility(false)}
                                    ref={inputRef} />
                            </View>
                        </ViewInputModal>
                    </ModalBackground>
                </Modal>
            </TouchableOpacity>

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