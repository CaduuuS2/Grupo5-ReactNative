import React from 'react';
import { Text } from 'react-native';
import { Container, StyledPhoto, ViewUser, ViewUsernameEmail, UserPhoto, ViewCategoria, TextCategoria, TextItens, BtnIconText } from './style';
import { FontAwesome, Entypo, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";


const MenuHamburguer = () => {

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    return (
        <Container>
            <StyledPhoto source={require("./../../../assets/img/logo_size.png")} />
            <ViewUser>
                <UserPhoto source={require("./../../../assets/img/buck.png")} />
                <ViewUsernameEmail>
                    <Text style={{ color: "white" }}>buck</Text>
                    <Text style={{ color: "white" }}>buck@gmail.com</Text>
                </ViewUsernameEmail>

            </ViewUser>

            <ViewCategoria>
                <TextCategoria style={{ color: "white" }}>Acervo:</TextCategoria>
                <TextItens>História</TextItens>
                <TextItens>Filosofia</TextItens>
                <TextItens>Classicos da Antiguidade</TextItens>
            </ViewCategoria>
            <ViewCategoria>
                <TextCategoria style={{ color: "white" }}>Seções:</TextCategoria>
                <BtnIconText onPress={() => navigation.navigate('Home')}>
                    <FontAwesome name="home" size={24} color="white" />
                    <TextItens>Home</TextItens>
                </BtnIconText>

                <BtnIconText onPress={() => navigation.navigate('Carrinho')}>
                    <Entypo name="shopping-cart" size={24} color="white" />
                    <TextItens>Carrinho</TextItens>
                </BtnIconText>

                <BtnIconText onPress={() => navigation.navigate('Cadastro')}>
                <Ionicons name="enter" size={24} color="white" />
                    <TextItens>Cadastro</TextItens>
                </BtnIconText>

                <BtnIconText onPress={() => navigation.navigate('Login')}>
                    <SimpleLineIcons name="logout" size={24} color="white" />
                    <TextItens>Sair</TextItens>
                </BtnIconText>

            </ViewCategoria>
        </Container>
    )
}


export default MenuHamburguer;