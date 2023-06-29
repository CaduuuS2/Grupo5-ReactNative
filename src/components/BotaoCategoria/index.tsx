import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { BtnIconText, TextItens } from './style';

interface BotaoCategoriaProps {
  nomeCategoria: string;
  onPress: () => void;
}

const BotaoCategoria: React.FC<BotaoCategoriaProps> = ({ nomeCategoria, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BtnIconText>
        <TextItens>{nomeCategoria}</TextItens>
      </BtnIconText>
    </TouchableOpacity>
  );
};

export default BotaoCategoria;

