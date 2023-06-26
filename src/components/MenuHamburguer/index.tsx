import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Container, StyledPhoto, ViewUser, ViewUsernameEmail, UserPhoto, ViewCategoria, TextCategoria, TextItens, BtnIconText } from './style';
import { FontAwesome, Entypo, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import { filtrarProdutosPorCategoria } from '../../funcoes/funcoes';
import { useProdutosContext } from '../../context/ProdutosProvider';
import { produtosInit } from '../../data/produtos';


const MenuHamburguer = () => {

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    
    const { produtos, setProdutos } = useProdutosContext();

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
                <BtnIconText onPress={() => {
                    setProdutos(filtrarProdutosPorCategoria(produtosInit, 1))}
                }>
                    <TextItens>História</TextItens>
                </BtnIconText>
                <BtnIconText onPress={() => {
                    setProdutos(filtrarProdutosPorCategoria(produtosInit, 2))}
                }>
                    <TextItens>Filosofia</TextItens>
                </BtnIconText>
                <BtnIconText onPress={() => {
                    setProdutos(filtrarProdutosPorCategoria(produtosInit, 3))}
                }>
                    <TextItens>Classicos da Antiguidade</TextItens>
                </BtnIconText>
                <BtnIconText onPress={() => {
                    setProdutos(produtosInit)}
                }>
                    <TextItens>Todas</TextItens>
                </BtnIconText>


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
                
                {/* para testar produtos */}
                {/* {produtos.map((produto: Produto) => <Text key={produto.id} style={{ fontSize: 10, color: 'white'}}>{produto.categoria}</Text>) } */}
                
            </ViewCategoria>
            
            
           

        </Container>
    )
}


export default MenuHamburguer;