import React from 'react';
import { Text,  TouchableOpacity} from 'react-native';
import { Container } from './style';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  
  const navigation = useNavigation < NativeStackNavigationProp<StackParams>> ();
    const handleCadastro = () => {
      return (
        navigation.navigate('Cadastro')
      )
    }
    return (
        <Container>
            <TouchableOpacity onPress={handleCadastro}>
                 <Text>Cadastro</Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity onPress={handleHome}>
                 <Text >Home</Text> 
            </TouchableOpacity>
             */}
        </Container>
    )
}

export default Login;