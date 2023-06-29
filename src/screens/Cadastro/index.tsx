import React, { useState } from "react";
import { ViewBotao, Container, ContainerCustom, ViewLabelCustom, LabelRow, PhotoPerfil, Label, ViewLabel } from './style';
import Fundo from "../../components/Fundo";
import InputModal from '../../components/InputModal';
import BotaoVerde from "../../components/BotaoVerde";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes/rotasPrivadas";
import { useNavigation } from "@react-navigation/native";
import { CadastrarUsuario } from "../../Services/produtoService";

interface ScreenNavigationProp{
    navigate : (screen : string) => void;
}

const Cadastro = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const [username, setUserName] = useState("")
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")
    const [password, setPassword] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [complemento, setComplemento] = useState("")
    const [numero, setNumero] = useState("")
    const [data, setData] = useState({})
    const {navigate} = useNavigation<ScreenNavigationProp>();
    const handleCadastro = async () => {
                setData ({
                "nome": nomeCompleto,
                "nomeUser": username,
                "telefone": telefone,
                "email": email,
                "cpf": cpf,
                "compra": true,
                "venda": false,
                "data": nascimento,
                "cep": cep,
                "numero": numero,
                "complemento": complemento,
                "password": password,
                "roles": [
                  "user"
                ],
                "url" : "https://s2-techtudo.glbimg.com/Bxr-QA4_gL25CarCCxr9JQFybt8=/0x0:1024x609/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
            }) 
             console.log(data)
                const status = await CadastrarUsuario(data)
                if(status === 200){
                    setTimeout(() => {
                        // TODO Avisar o usuario que foi cadastrado com sucesso
                        navigate('Login')
                    }, 1000);
                    
                }

    }
    

    return (
        <Fundo colors={["#BD6F29", "#ffffff"]} start={[1, 0]} end={[0, 1]}>

            <Container>


                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> Username </LabelRow>
                        <InputModal
                            value={username}
                            placeholder={"Insira usuário"}
                            onChangeText={setUserName}
                            keyboardType="default"
                            inputWidth={190}
                            
                        />
                       
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                    <PhotoPerfil source={require("../../../assets/img/buck.png")} />
                    </ViewLabelCustom>

                </ContainerCustom>




                <ViewLabel>
                    <Label> Nome completo </Label>
                    <InputModal
                        value={nomeCompleto}
                        placeholder={"Nome completo"}
                        onChangeText={setNomeCompleto}
                        keyboardType="default"
                        inputWidth={350}
                    />
                </ViewLabel>

                <ViewLabel>
                    <Label> Email </Label>
                    <InputModal
                        value={email}
                        placeholder={"Insira Email"}
                        onChangeText={setEmail}
                        keyboardType="default"
                        inputWidth={350}
                    />
                </ViewLabel>

                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> CPF </LabelRow>
                        <InputModal
                            value={cpf}
                            placeholder={"000.000.000-00"}
                            onChangeText={setCPF}
                            keyboardType="default"
                            inputWidth={155}
                        />
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                        <LabelRow> Password </LabelRow>
                        <InputModal
                            value={password}
                            placeholder={" *********"}
                            onChangeText={setPassword}
                            keyboardType="default"
                            inputWidth={155}
                        />
                    </ViewLabelCustom>

                </ContainerCustom>

                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> Nascimento </LabelRow>
                        <InputModal
                            value={nascimento}
                            placeholder={" 00/00/0000"}
                            onChangeText={setNascimento}
                            keyboardType="default"
                            inputWidth={155}
                        />
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                        <LabelRow> Telefone </LabelRow>
                        <InputModal
                            value={telefone}
                            placeholder={"24992135181"}
                            onChangeText={setTelefone}
                            keyboardType="default"
                            inputWidth={155}
                        />
                    </ViewLabelCustom>

                </ContainerCustom>

                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> Cep </LabelRow>
                        <InputModal
                            value={cep}
                            placeholder={" 00000-000"}
                            onChangeText={setCep}
                            keyboardType="default"
                            inputWidth={155}
                        />
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                        <LabelRow> Bairro </LabelRow>
                        <InputModal
                            value={bairro}
                            placeholder={"Insira bairro:"}
                            onChangeText={setBairro}
                            keyboardType="default"
                            inputWidth={155}
                        />
                    </ViewLabelCustom>

                </ContainerCustom>

                <ViewLabel>
                    <Label> Logradouro </Label>
                    <InputModal
                        value={logradouro}
                        placeholder={"Insira endereço:"}
                        onChangeText={setLogradouro}
                        keyboardType="default"
                        inputWidth={350}
                    />
                </ViewLabel>


                <ContainerCustom>


                    <ViewLabelCustom>
                        <LabelRow> Complemento </LabelRow>
                        <InputModal
                            value={complemento}
                            placeholder={"Casa 2"}
                            onChangeText={setComplemento}
                            keyboardType="default"
                            inputWidth={150}
                        />



                    </ViewLabelCustom>

                    <ViewLabelCustom>
                        <LabelRow> Número </LabelRow>
                        <InputModal
                            value={numero}
                            placeholder={"160"}
                            onChangeText={setNumero}
                            keyboardType="default"
                            inputWidth={150}
                        />

                    </ViewLabelCustom>

                </ContainerCustom>

            </Container>
            <ViewBotao>
                    <BotaoVerde textoBotao="Confirmar" onPress={handleCadastro} />
                </ViewBotao>
        </Fundo>
    )

    }

export default Cadastro;