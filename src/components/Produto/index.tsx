import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Container, BlocoImagem, BlocoBotoes, Botoes, BlocoTextos, BlocoDados, TituloNome, TituloPreco } from './style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native'

interface ProdutoProps {
  nome: string;
  preco: number;
  imagem: string;
}

const Produto: React.FC<ProdutoProps> = ({ nome, preco, imagem }) => {
  const [favorito, setFavorito] = useState(false);

  const handleFavorito = () => {
    setFavorito(!favorito);
  };

  const handleCarrinho = () => {
    // Lógica para adicionar ao carrinho
  };

  return (
    <Container>
      <BlocoImagem source= {{uri: imagem}} />
      <BlocoDados>
          <BlocoTextos>
          <TituloNome>{nome}</TituloNome>
          <TituloPreco>Valor: {preco.toFixed(2)}</TituloPreco>
        </BlocoTextos>
                
        <BlocoBotoes>
          <Botoes onPress={handleCarrinho} style={{ width: 151, flexDirection: 'row' }}>
            <Text style={{ color: 'white', marginRight: 8}}>Adicionar</Text>
            <MaterialIcons name="add-shopping-cart" size={24} color="white" />
          </Botoes>
          <Botoes onPress={handleFavorito} style={{ width: 30, borderRadius: 15, backgroundColor: '#DDDDDD' }}>
            {!favorito ? <AntDesign name="heart" size={24} color="gray" /> : <AntDesign name="heart" size={24} color="red" />}
          </Botoes>
        </BlocoBotoes>
      </BlocoDados>
    </Container>
  );
};

export default Produto;