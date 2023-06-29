import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';

const Stack = createNativeStackNavigator();
export type StackParams = {
    Home: any;
    Cadastro: any;
    Carrinho: any;
    Login: any;

}
function RotasPublicas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  >
        <Stack.Screen name="Cadastro" component={Cadastro} options={{title: 'Cadastro',
          headerStyle: {
            backgroundColor: '#073528'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30, 
          },
          headerTitleAlign: 'center',
         
        }}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RotasPublicas;