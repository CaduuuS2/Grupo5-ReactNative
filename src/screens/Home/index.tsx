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
  
  React.useEffect(() => {
      async function fetchApi(){
        const produtos = await GetProduto()
        setProduct(produtos)
        setProdutoLista(produtos)
      }
      fetchApi()
      
  },[])


  const handleCarrinho = () => {
    return navigation.navigate("Carrinho");
  };
  const [pesquisa, setPesquisa] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [produtoLista, setProdutoLista] = useState(product)
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
    <Container>
          <ModalHamburguer
            modalVisibility={modalVisible}
            setModalVisibility={setModalVisible}
          />

          <BlocoSlides>
            <Carrossel autoplay={true} autoplayTimeout={5} showsButtons={true}>
              <Slide>
                <SlideImagens
                  source={require("../../../assets/img/HarryPotter.png")}
                />
              </Slide>

              <Slide>
                <SlideImagens
                  source={require("../../../assets/img/logo_size.png")}
                />
              </Slide>

              <Slide>
                <SlideImagens
                  source={require("../../../assets/img/buck.png")}
                />
              </Slide>
            </Carrossel>
          </BlocoSlides>

      <View style={{flex: 1}}>
        <FlatList
        data={product}
        keyExtractor={(item) => item.produtoId.toString()}
        renderItem={({ item , index}) => (
          <Produto
            key={index}
            nome={item.nome}
            imagem={item.url}
            preco={item.valorUnitario}
          />
        )}
      />
        
      </View>
      
    </Container>
  )
};

export default Home;
