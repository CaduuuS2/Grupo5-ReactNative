import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes/rotasPrivadas";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CarrinhoBotao = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const handleCarrinho = () => {
    navigation.navigate("Carrinho");
  };
  return (
    <>
      <TouchableOpacity onPress={handleCarrinho}>
        <MaterialCommunityIcons name="cart" size={27} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default CarrinhoBotao;
