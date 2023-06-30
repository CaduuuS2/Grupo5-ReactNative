import React, { useState, useContext, useEffect } from "react";
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
import { FlatList } from 'react-native';
import Cabecalho from "../../components/Cabecalho";
import Fundo from "../../components/Fundo";
import { ProdutosContext } from '../../context/ProdutosProvider';
import { Produto } from '../../classes/produto';
import Produtos from "../../components/Produto";
import BotaoVerde from "../../components/BotaoVerde";
import { listaProdutos } from "../../data/produtos";

interface itemCarrinho {
  produtoId: number;
  nome: string;
  quantidadeCarrinho: number;
  categoria: string;
  descricao: string;
  valorUnitario: number;
  url: string;
  favorito: boolean;
  noCarrinho: boolean;
}

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [product, setProduct] = useState<itemCarrinho[]>();
  const [pesquisa, setPesquisa] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [produtoLista, setProdutoLista] = useState<itemCarrinho[]>()
  const { produtos, setProdutos } = useContext(ProdutosContext)
  const [paginaCarregada, setPaginaCarregada] = useState(false)

  // const fetchApi = async () => {
  //   const produtosGet = await GetProduto()
  //   setProduct(produtosGet)
  //   dateProd
  //   //setProdutoLista(produtos)
  // }

  // React.useEffect(() => {
  //   fetchApi()
  // }, [])

  const dateProduto = () => {
    const produtosObjetosValidos = produtos.map((itemMap) => ({
      produtoId: itemMap.id,
      nome: itemMap.nome,
      quantidadeCarrinho: 1,
      categoria: itemMap.categoria,
      descricao: itemMap.descricao,
      valorUnitario: itemMap.preco,
      url: itemMap.url,
      favorito: false,
      noCarrinho: false
    }))
    setProduct(produtosObjetosValidos)
    setProdutoLista(produtosObjetosValidos)
  }

  useEffect(() => {
    dateProduto()
  }, [])


  navigation.setOptions({
    headerTitle: () => <Cabecalho pesquisa={pesquisa} setPesquisa={setPesquisa} />,
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
  
  const pesquisaBar = () => {
    if (product !== undefined && pesquisa !== '') {
      const produtoFiltrado = product.filter((p) => p.nome.toLowerCase().includes(pesquisa.toLowerCase()))
      setProdutoLista(produtoFiltrado)
    } else if (pesquisa === '') {
      setProdutoLista(product)
    }
  }

  useEffect(() => {
    if (paginaCarregada === true) {
      pesquisaBar()
    } else {
      setPaginaCarregada(true)
    }
  }, [pesquisa])


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
              <Produtos
                key={index}
                nome={item.nome}
                imagem={item.url}
                preco={item.valorUnitario}
                id={item.produtoId}
                favorito={item.favorito} />
            )} />
        </View>
      </Container>
    </Fundo>
  )
};

export default Home;
