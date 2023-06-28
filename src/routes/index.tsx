// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from '../screens/Login';
// import Home from '../screens/Home';
// import Cadastro from '../screens/Cadastro';
// import Carrinho from '../screens/Carrinho';
// import MenuHamburguer from '../components/MenuHamburguer';
// import BotaoVerde from '../components/BotaoVerde';
// import Cabecalho from '../components/Cabecalho';
// import { Button, View } from 'react-native';
// import { Entypo } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();
// export type StackParams = {
//   Home: any;
//   Cadastro: any;
//   Carrinho: any;
//   Login: any;
//   MenuHamburguer: any;

// }
// function Rotas() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login"  >
//         <Stack.Screen name="Home" component={Home} options={{
//           /* headerTitle: () => <Cabecalho />, */
//           /* headerStyle: {
//             backgroundColor: '#073528'
//           }, */
//           headerTintColor: '#fff',
//           headerTitleAlign: 'center',
//           headerLeft: () => (
//             <View style={{ marginLeft: 5 }}>
//               <Entypo name="menu" size={24} color="white" />
//             </View>
//           )
//         }}/>

//         <Stack.Screen name="Cadastro" component={Cadastro} options={{
//           title: 'Cadastro',
//           headerStyle: {
//             backgroundColor: '#073528'
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//             fontSize: 30,
//           },

//         }} />
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//         <Stack.Screen name="Carrinho" component={Carrinho} />
//         <Stack.Screen name="MenuHamburguer" component={MenuHamburguer} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Rotas;