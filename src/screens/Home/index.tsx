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

  const getProd = async () => {
      setProduct(await GetProduto())
  }

  React.useEffect(() => {
      getProd();
  },[])


  const handleCarrinho = () => {
    return navigation.navigate("Carrinho");
  };

  const [modalVisible, setModalVisible] = useState(false);

  navigation.setOptions({
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
  
  const productAlternativo = [
    {
    nome:"nome 1",
    valorUnitario: 19,
    produtoId: 1,
    url: "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg"
  }, {
    nome:"nome 1",
    valorUnitario: 200,
    produtoId: 2,
    url: "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg"
  }, {
    nome:"nome 1",
    valorUnitario: 100,
    produtoId: 3,
    url: "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg"
  }
]
  

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
        data={productAlternativo}
        keyExtractor={(item) => item.produtoId.toString()}
        renderItem={({ item }) => (
          <Produto
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
