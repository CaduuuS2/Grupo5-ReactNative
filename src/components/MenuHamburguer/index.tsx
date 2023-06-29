import React, { useContext, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Container, StyledPhoto, ViewUser, ViewUsernameEmail, UserPhoto, ViewCategoria, TextCategoria, TextItens, BtnIconText, ViewCategoriaA } from './style';
import { FontAwesome, Entypo, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from '../../routes/rotasPrivadas';
import { useNavigation } from "@react-navigation/native";
import { filtrarProdutosPorCategoria } from '../../funcoes/funcoes';
import { useProdutosContext } from '../../context/ProdutosProvider';
import { AuthContext } from '../../context/authContext';
import { getUsuario, getCategorias } from '../../Services/produtoService';
import BotaoCategoria from '../BotaoCategoria';


interface MenuHamburguerProps {
    modalVisibility: boolean;
    setModalVisibility: (visible: boolean) => void;
}

const MenuHamburguer: React.FC<MenuHamburguerProps> = ({ modalVisibility, setModalVisibility }) => {

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const { produtos, setProdutos } = useProdutosContext();
    const { logout, id } = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState({
        nome: "", email: "", imagem: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
    })

    const [listaCategoria, setListaCategoria] = useState([]);


    const getUserInfo = async () => {
        const response = await getUsuario()
        if (response?.status === 200) {
            console.log("Usuário encontrado");
            const dataUsuario = response.data.filter((d: any) => d.usuarioId === id)[0]
            setUserInfo({
                nome: dataUsuario.nome,
                email: dataUsuario.user.email,
                imagem: dataUsuario.url === null ? "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg" : dataUsuario.url,
            });
        } else {
            console.log("Usuário não encontrado")
        }
    }

    const getListaCategorias = async () => {
        const response = await getCategorias()
        console.log(response[0].nome)
        setListaCategoria(response)
    }


    React.useEffect(() => {
        getUserInfo();
        getListaCategorias();
    }, [])



    return (
        <Container>
            <View style={{
                flex: 1.7,
                alignItems: 'center',
            }}>
                <StyledPhoto source={require("./../../../assets/img/logo_size.png")} />
                <ViewUser>
                    <UserPhoto source={{ uri: userInfo.imagem }} />
                    <ViewUsernameEmail>
                        <Text style={{ color: "white" }}>{userInfo.nome}</Text>
                        <Text style={{ color: "white" }}>{userInfo.email}</Text>
                    </ViewUsernameEmail>

                </ViewUser>
            </View>

            <ViewCategoriaA>
                <TextCategoria style={{ color: "white" }}>Acervo:</TextCategoria>

                <View >
                    <FlatList
                        data={listaCategoria}
                        renderItem={({ item }: { item: any }) => (
                            <BotaoCategoria
                                key={item.categoriaId.toString()}
                                nomeCategoria={item.nome}
                                onPress={() => { }/* handlePress */}
                            />
                        )} />
                    <BtnIconText onPress={() => { }
                    }>
                        <TextItens>Todas</TextItens>
                    </BtnIconText>
                </View>

                {/* <BtnIconText onPress={() => { }
                }>
                    <TextItens>História</TextItens>
                </BtnIconText>

                <BtnIconText onPress={() => { }
                }>
                    <TextItens>Filosofia</TextItens>
                </BtnIconText>

                <BtnIconText onPress={() => { }
                }>
                    <TextItens>Classicos da Antiguidade</TextItens>
                </BtnIconText> */}




            </ViewCategoriaA>
            <ViewCategoria>
                <TextCategoria style={{ color: "white" }}>Seções:</TextCategoria>
                <BtnIconText onPress={() => setModalVisibility(false)}>
                    <FontAwesome name="home" size={24} color="white" />
                    <TextItens>Home</TextItens>
                </BtnIconText>

                <BtnIconText onPress={() => navigation.navigate('Carrinho')}>
                    <Entypo name="shopping-cart" size={24} color="white" />
                    <TextItens>Carrinho</TextItens>
                </BtnIconText>

                <BtnIconText onPress={() => {
                    logout()
                }}>
                    <SimpleLineIcons name="logout" size={24} color="white" />
                    <TextItens>Sair</TextItens>
                </BtnIconText>

                {/* para testar produtos */}
                {/* {produtos.map((produto: Produto) => <Text key={produto.id} style={{ fontSize: 10, color: 'white'}}>{produto.categoria}</Text>) } */}

            </ViewCategoria>




        </Container >
    )
}


export default MenuHamburguer;