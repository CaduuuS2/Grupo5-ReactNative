import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  Container,
  Textos,
  BlocoConteudos,
  BlocoImagem,
  Item,
  IconeImg,
  Carrossel,
  Slide,
  SlideImagens,
  BlocoSlides,
  BlocoBotoes,
  Botoes,
  BlocoTextos,
  Topo,
  ConteudoPrincipal,
  Blocotopo,
} from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { StackParams } from "../../routes/rotasPrivadas";
import ModalHamburguer from "../../components/ModalHamburguer";
import { IProduto } from "../../model/user";
import { GetProduto } from "../../Services/produtoService";
// type Props = {
//   itemProduto: IProduto;
  
// };
interface ProdutoObjeto  {
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
  {product?.map((itemMap) => {} )}
  return (
    <Container>
      <ScrollView>
        <Topo>
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
        </Topo>

        <ConteudoPrincipal>
          <BlocoConteudos>
            <BlocoImagem
              source={require("../../../assets/img/HarryPotter.png")}
            ></BlocoImagem>
            <BlocoTextos>
              <Item>
                  <Textos>
                    {/* {itemMap.nome} */}
                  </Textos> 

              </Item>

              <Item>
                <Textos></Textos>
              </Item>

              <BlocoBotoes>
                <Botoes onPress={handleCarrinho}>
                  {/*<IconeImg source={require('./carrinho.png')}></IconeImg>*/}

                  <Text>ADD</Text>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={24}
                    color="black"
                  />
                </Botoes>

                <Botoes onPress={handleCarrinho}>
                  <Text>Favorito</Text>
                  <AntDesign name="heart" size={24} color="black" />
                </Botoes>
              </BlocoBotoes>
            </BlocoTextos>
          </BlocoConteudos>

          <BlocoConteudos>
            <BlocoImagem
              source={require("../../../assets/img/HarryPotter.png")}
            ></BlocoImagem>
            <BlocoTextos>
              <Item>
                <Textos>Nome: Harry Potter</Textos>
              </Item>

              <Item>
                <Textos>Valor: 119,90</Textos>
              </Item>

              <BlocoBotoes>
                <Botoes onPress={handleCarrinho}>
                  <Text>ADD</Text>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={24}
                    color="black"
                  />
                </Botoes>

                <Botoes onPress={handleCarrinho}>
                  <Text>Favorito</Text>
                  <AntDesign name="heart" size={24} color="black" />
                </Botoes>
              </BlocoBotoes>
            </BlocoTextos>
          </BlocoConteudos>

          <BlocoConteudos>
            <BlocoImagem
              source={require("../../../assets/img/HarryPotter.png")}
            ></BlocoImagem>
            <BlocoTextos>
              <Item>
                <Textos>Nome: Harry Potter</Textos>
              </Item>

              <Item>
                <Textos>Valor: 119,90</Textos>
              </Item>

              <BlocoBotoes>
                <Botoes onPress={handleCarrinho}>
                  <Text>ADD</Text>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={24}
                    color="black"
                  />
                </Botoes>

                <Botoes onPress={handleCarrinho}>
                  <Text>Favorito</Text>
                  <AntDesign name="heart" size={24} color="black" />
                </Botoes>
              </BlocoBotoes>
            </BlocoTextos>
          </BlocoConteudos>

          <BlocoConteudos>
            <BlocoImagem
              source={require("../../../assets/img/HarryPotter.png")}
            ></BlocoImagem>
            <BlocoTextos>
              <Item>
                <Textos>Nome: Harry Potter</Textos>
              </Item>

              <Item>
                <Textos>Valor: 119,90</Textos>
              </Item>

              <BlocoBotoes>
                <Botoes onPress={handleCarrinho}>
                  <Text>ADD</Text>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={24}
                    color="black"
                  />
                </Botoes>

                <Botoes onPress={handleCarrinho}>
                  <Text>Favorito</Text>
                  <AntDesign name="heart" size={24} color="black" />
                </Botoes>
              </BlocoBotoes>
            </BlocoTextos>
          </BlocoConteudos>
        </ConteudoPrincipal>
      </ScrollView>
    </Container>
  );
};

export default Home;
