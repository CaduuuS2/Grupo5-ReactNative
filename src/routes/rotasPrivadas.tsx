import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Carrinho from '../screens/Carrinho';
import MenuHamburguer from '../components/MenuHamburguer';
import Cabecalho from '../components/Cabecalho';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import CarrinhoBotao from '../components/CarrinhoBotao';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();
export type StackParams = {
    Home: any;
    Cadastro: any;
    Carrinho: any;
    Login: any;
}
function RotasPrivadas() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Cabecalho/>,
          headerStyle: {
            backgroundColor: '#073528'
           },
           headerTintColor: '#fff',
           headerTitleAlign: 'center',
           headerRight : () =>(
            <CarrinhoBotao />
          )
           }} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RotasPrivadas;