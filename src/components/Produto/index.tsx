import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Container, BlocoImagem, BlocoBotoes, Botoes, BlocoTextos, BlocoDados, TituloNome, TituloPreco } from './style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native'
import { ProdutosContext } from '../../context/ProdutosProvider';
import { Produto } from '../../classes/produto';

interface ProdutoProps {
  nome: string;
  preco: number;
  imagem: string;
  id: number;
  favorito: boolean;
}

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

const Produtos: React.FC<ProdutoProps> = ({ nome, preco, imagem, id, favorito }) => {
  const { produtos, setProdutos } = React.useContext(ProdutosContext)
  const [favoritoHome, setFavoritoHome] = useState(favorito)

  const handleFavorito = (favorito: boolean, id: number) => {
    if (favorito === false) {
      const newProdutos = produtos.map((itemMap) => {
        if (itemMap.id === id) {
          let spreadItemMap = { ...itemMap }
          spreadItemMap.favorito = true
          setFavoritoHome(true)
          return spreadItemMap
        } else {
          return itemMap
        }
      })
      setProdutos(newProdutos)
    } else if (favorito === true) {
      const newProdutos: Produto[] = produtos.map((itemMap) => {
        if (itemMap.id === id) {
          let spreadItemMap = { ...itemMap }
          spreadItemMap.favorito = false
          setFavoritoHome(false)
          return spreadItemMap
        } else {
          return itemMap
        }
      })
      setProdutos(newProdutos)
    }
  }
  const handleCarrinho = (id: number) => {
    const itemFunctionParseId = id
    let itemFunctionObjetoValido: Produto = {} as Produto
    for (const itemForOf of produtos) {
      if (itemForOf.id === itemFunctionParseId) {
        itemForOf.noCarrinho = true;
        itemFunctionObjetoValido = itemForOf;
        break;
      }
    }
    setProdutos([...produtos.filter((itemFilter) => { return itemFilter.id !== itemFunctionParseId }), itemFunctionObjetoValido])
  }

  return (
    <Container>
      <BlocoImagem source={{ uri: imagem }} />
      <BlocoDados>
        <BlocoTextos>
          <TituloNome>{nome}</TituloNome>
          <TituloPreco>Valor: {preco.toFixed(2)}</TituloPreco>
        </BlocoTextos>
        <BlocoBotoes>
          <Botoes onPress={() => handleCarrinho(id)} style={{ width: 151, flexDirection: 'row' }}>
            <Text style={{ color: 'white', marginRight: 8 }}>Adicionar</Text>
            <MaterialIcons name="add-shopping-cart" size={24} color="white" />
          </Botoes>
          <Botoes onPress={() => handleFavorito(favoritoHome, id)} style={{ width: 30, borderRadius: 15, backgroundColor: '#DDDDDD' }}>
            {!favoritoHome ? <AntDesign name="heart" size={24} color="gray" /> : <AntDesign name="heart" size={24} color="red" />}
          </Botoes>
        </BlocoBotoes>
      </BlocoDados>
    </Container>
  );
};

export default Produtos;