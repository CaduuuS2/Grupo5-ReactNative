import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import Carrinho from '../screens/Carrinho';
import BotaoVerde from '../components/BotaoVerde';
import Cabecalho from '../components/Cabecalho';
// import DrawerRoutes from './drawer.routes';


const Stack = createNativeStackNavigator();
export type StackParams = {
    Home: any;
    Cadastro: any;
    Carrinho: any;
    Login: any;
    Drawer : any;

}
function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  >
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Cabecalho/> }} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        {/* <Stack.Screen name="Drawer" component={DrawerRoutes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;