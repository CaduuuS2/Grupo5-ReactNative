import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Carrossel,
  Slide,
  SlideImagens,
  BlocoSlides
} from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { StackParams } from "../../routes/rotasPrivadas";
import ModalHamburguer from "../../components/ModalHamburguer";
import { GetProduto } from "../../Services/produtoService";
import Produto from "../../components/Produto";
import { FlatList } from 'react-native';
import Cabecalho from "../../components/Cabecalho";
import Fundo from "../../components/Fundo";

interface ProdutoObjeto {
  produtoId: number;
  nome: string;
  descricao: string;
  quantidadeEstoque: number;
  valorUnitario: number;
  url: string;
}

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [product, setProduct] = useState<ProdutoObjeto[]>();
  const [pesquisa, setPesquisa] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [produtoLista, setProdutoLista] = useState(product)
  React.useEffect(() => {
        async function fetchApi(){
        const produtos = await GetProduto()
        setProduct(produtos)
        setProdutoLista(produtos)
      }
      fetchApi()
  },[])
  
  React.useEffect( ()=> {
    if(pesquisa === ''){
      setProdutoLista(product)
      return 
    }
    const produtoFiltrado =  product?.filter(p => p.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    setProdutoLista(produtoFiltrado)
  },[pesquisa]) 

    navigation.setOptions({
    headerTitle: () => <Cabecalho pesquisa = {pesquisa} setPesquisa = {setPesquisa}/>,
    headerLeft: () => (
      <View style={{ marginLeft: 0 }}>
        <Entypo
          name="menu"
          size={25}
          color="white"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
    ),
  });
  return (
    <Fundo colors={['#BD6F29', '#ffffff']}
      start={[1, 0]}
      end={[0, 1]}>
    <Container>
      <ModalHamburguer
        modalVisibility={modalVisible}
        setModalVisibility={setModalVisible} />
      <BlocoSlides>
        <Carrossel autoplay={true} autoplayTimeout={5} showsButtons={true}>
          <Slide>
            <SlideImagens
              source={require("../../../assets/img/propaganda3.png")}
              style={{ resizeMode: 'contain' }} />
          </Slide>
          <Slide>
            <SlideImagens
              source={require("../../../assets/img/propaganda2.png")}
              style={{ resizeMode: 'contain' }} />
          </Slide>
          <Slide>
            <SlideImagens
              source={require("../../../assets/img/propaganda1.png")}
              style={{ resizeMode: 'contain' }} />
          </Slide>
        </Carrossel>
      </BlocoSlides>
      <View style={{ flex: 1 }}>
        <FlatList
          data={produtoLista}
          keyExtractor={(item) => item.produtoId.toString()}
          renderItem={({ item, index }) => (
            <Produto
              key={index}
              nome={item.nome}
              imagem={item.url}
              preco={item.valorUnitario} />
          )} />
      </View>
    </Container>
    </Fundo>
  )
};

export default Home;
