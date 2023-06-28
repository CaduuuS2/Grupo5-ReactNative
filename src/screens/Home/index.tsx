import React from 'react';
import { ScrollView, Text, View} from 'react-native';
import { Container, Textos, BlocoConteudos, BlocoImagem, Item, IconeImg, Carrossel, Slide, SlideImagens, BlocoSlides, BlocoBotoes, Botoes, BlocoTextos, Topo, ConteudoPrincipal, Blocotopo } from './style';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import Swiper from 'react-native-swiper'
import { MaterialIcons, AntDesign  } from '@expo/vector-icons'; 

const Home = () => {
  
  const navigation = useNavigation < NativeStackNavigationProp<StackParams>> ();
    const handleCarrinho = () => {
      return (
        navigation.navigate('Carrinho')
      )
    }
    return (
        <Container>
          <ScrollView>
            <Topo>
              

              <BlocoSlides>
                <Carrossel autoplay={true} autoplayTimeout={5} showsButtons={true}>
              
                  <Slide>
                  <SlideImagens source={require('../../../assets/img/HarryPotter.png')}/>
             
                </Slide>

                  <Slide>
                    <SlideImagens source={require('../../../assets/img/logo_size.png')}/>
             
                  </Slide>

                  <Slide>
                    <SlideImagens source={require('../../../assets/img/buck.png')}/>
             
                  </Slide>
                </Carrossel>

          
              </BlocoSlides>

            
            
            
            
            
            </Topo>
          
         
        <ConteudoPrincipal>
          
          
          
            
          
          
          
          <BlocoConteudos>
            <BlocoImagem source={require('../../../assets/img/HarryPotter.png')}></BlocoImagem>
              <BlocoTextos>
                <Item>
                <Textos>Nome: Harry Potter</Textos>
                </Item>
                
                <Item>
                <Textos>Valor: 119,90</Textos>
                </Item>
                
                <BlocoBotoes>
                  
                  <Botoes onPress={handleCarrinho}>
               
                  {/*<IconeImg source={require('./carrinho.png')}></IconeImg>*/}
                  
                  <Text>ADD</Text>
                  <MaterialIcons name="add-shopping-cart" size={24} color="black" />
                  
                            
                  </Botoes>


                  <Botoes onPress={handleCarrinho}>
               
                    <Text>Favorito</Text>
                    <AntDesign name="heart" size={24} color="black" />
                            
                  </Botoes>
                
                
                </BlocoBotoes>

              </BlocoTextos>
            </BlocoConteudos> 



            <BlocoConteudos>
            <BlocoImagem source={require('../../../assets/img/HarryPotter.png')}></BlocoImagem>
              <BlocoTextos>
                <Item>
                <Textos>Nome: Harry Potter</Textos>
                </Item>
                
                <Item>
                <Textos>Valor: 119,90</Textos>
                </Item>
                
                <BlocoBotoes>
                  
                  <Botoes onPress={handleCarrinho}>
               
                  <Text>ADD</Text>
                  <MaterialIcons name="add-shopping-cart" size={24} color="black" />
                            
                  </Botoes>


                  <Botoes onPress={handleCarrinho}>
               
                  <Text>Favorito</Text>
                  <AntDesign name="heart" size={24} color="black" />
                    
                            
                  </Botoes>
                
                
                </BlocoBotoes>

              </BlocoTextos>
            </BlocoConteudos>     
          
          
          
            <BlocoConteudos>
            <BlocoImagem source={require('../../../assets/img/HarryPotter.png')}></BlocoImagem>
              <BlocoTextos>
                <Item>
                <Textos>Nome: Harry Potter</Textos>
                </Item>
                
                <Item>
                <Textos>Valor: 119,90</Textos>
                </Item>
                
                <BlocoBotoes>
                  
                  <Botoes onPress={handleCarrinho}>
               
                  <Text>ADD</Text>
                  <MaterialIcons name="add-shopping-cart" size={24} color="black" />
                    
                            
                  </Botoes>


                  <Botoes onPress={handleCarrinho}>
               
                  <Text>Favorito</Text>
                  <AntDesign name="heart" size={24} color="black" />
                    
                            
                  </Botoes>
                
                
                </BlocoBotoes>

              </BlocoTextos>
            </BlocoConteudos> 



            <BlocoConteudos>
            <BlocoImagem source={require('../../../assets/img/HarryPotter.png')}></BlocoImagem>
              <BlocoTextos>
                <Item>
                <Textos>Nome: Harry Potter</Textos>
                </Item>
                
                <Item>
                <Textos>Valor: 119,90</Textos>
                </Item>
                
                <BlocoBotoes>
                  
                  <Botoes onPress={handleCarrinho}>
               
                  <Text>ADD</Text>
                  <MaterialIcons name="add-shopping-cart" size={24} color="black" />
                            
                  </Botoes>


                  <Botoes onPress={handleCarrinho}>
               
                  <Text>Favorito</Text>
                  <AntDesign name="heart" size={24} color="black" />
                    
                            
                  </Botoes>
                
                
                </BlocoBotoes>

              </BlocoTextos>
            </BlocoConteudos> 
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          </ConteudoPrincipal>


            
                          
                    
           
           
           
           
           
           
           
           
           
            

          

          








            



           
            
            

            

            
            


          
          
          </ScrollView>   
        </Container>
    )
}

export default Home;