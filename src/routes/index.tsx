import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import Carrinho from '../screens/Carrinho';
import MenuHamburguer from '../components/MenuHamburguer';

const Stack = createNativeStackNavigator();
export type StackParams = {
    Home: any;
    Cadastro: any;
    Carrinho: any;
    Login: any;

}
function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="MenuHamburguer" component={MenuHamburguer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;