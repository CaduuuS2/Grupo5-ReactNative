import React, { useContext } from 'react';
import { View, Modal } from 'react-native';
import { ModalBackground } from './style';
import MenuHamburguer from '../MenuHamburguer';

interface ModalHamburguerProps {
  modalVisibility: boolean;
  setModalVisibility: (visible: boolean) => void;
}

const ModalHamburguer: React.FC<ModalHamburguerProps> = ({ modalVisibility, setModalVisibility }) => {
  
  
  
  return (
    <View style={{ height: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}
      >
        <ModalBackground onPressIn={() => setModalVisibility(!modalVisibility)}>
          <MenuHamburguer modalVisibility={ modalVisibility } setModalVisibility={ setModalVisibility }/>
        </ModalBackground>
      </Modal>
    </View>
  );
};

export default ModalHamburguer;
