import React, { useState } from "react";
import { ViewBotao, Container, ContainerCustom, ViewLabelCustom, LabelRow, PhotoPerfil, Label, ViewLabel } from './style';
import Fundo from "../../components/Fundo";
import InputModal from '../../components/InputModal';
import BotaoVerde from "../../components/BotaoVerde";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes/rotasPrivadas";
import { useNavigation } from "@react-navigation/native";


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
    

    return (
        <Fundo colors={["#BD6F29", "#ffffff"]} start={[1, 0]} end={[0, 1]}>

            <Container>


                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> Username </LabelRow>
                        <InputModal
                            value={username}
                            placeholder={"Entre com o username:"}
                            onChangeText={setUserName}
                            keyboardType="default"
                            inputWidth={90}
                        />
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                    <PhotoPerfil source={require("../../../assets/img/logo_size.png")} />
                    </ViewLabelCustom>

                </ContainerCustom>




                <ViewLabel>
                    <Label> Nome completo </Label>
                    <InputModal
                        value={nomeCompleto}
                        placeholder={"Entre com o username:"}
                        onChangeText={setNomeCompleto}
                        keyboardType="default"
                        inputWidth={100}
                    />
                </ViewLabel>

                <ViewLabel>
                    <Label> Email </Label>
                    <InputModal
                        value={email}
                        placeholder={"Entre com o username:"}
                        onChangeText={setEmail}
                        keyboardType="default"
                        inputWidth={100}
                    />
                </ViewLabel>

                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> CPF </LabelRow>
                        <InputModal
                            value={cpf}
                            placeholder={"Entre com o username:"}
                            onChangeText={setCPF}
                            keyboardType="default"
                            inputWidth={90}
                        />
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                        <LabelRow> Password </LabelRow>
                        <InputModal
                            value={password}
                            placeholder={"Entre com o username:"}
                            onChangeText={setPassword}
                            keyboardType="default"
                            inputWidth={90}
                        />
                    </ViewLabelCustom>

                </ContainerCustom>

                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> Nascimento </LabelRow>
                        <InputModal
                            value={nascimento}
                            placeholder={"Entre com o username:"}
                            onChangeText={setNascimento}
                            keyboardType="default"
                            inputWidth={90}
                        />
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                        <LabelRow> Telefone </LabelRow>
                        <InputModal
                            value={telefone}
                            placeholder={"Entre com o username:"}
                            onChangeText={setTelefone}
                            keyboardType="default"
                            inputWidth={90}
                        />
                    </ViewLabelCustom>

                </ContainerCustom>

                <ContainerCustom>

                    <ViewLabelCustom>
                        <LabelRow> Cep </LabelRow>
                        <InputModal
                            value={cep}
                            placeholder={"Entre com o username:"}
                            onChangeText={setCep}
                            keyboardType="default"
                            inputWidth={90}
                        />
                    </ViewLabelCustom>


                    <ViewLabelCustom>
                        <LabelRow> Bairro </LabelRow>
                        <InputModal
                            value={bairro}
                            placeholder={"Entre com o username:"}
                            onChangeText={setBairro}
                            keyboardType="default"
                            inputWidth={90}
                        />
                    </ViewLabelCustom>

                </ContainerCustom>

                <ViewLabel>
                    <Label> Logradouro </Label>
                    <InputModal
                        value={logradouro}
                        placeholder={"Entre com o username:"}
                        onChangeText={setLogradouro}
                        keyboardType="default"
                        inputWidth={100}
                    />
                </ViewLabel>


                <ContainerCustom>


                    <ViewLabelCustom>
                        <LabelRow> Complemento </LabelRow>
                        <InputModal
                            value={complemento}
                            placeholder={"Entre com o username:"}
                            onChangeText={setComplemento}
                            keyboardType="default"
                            inputWidth={90}
                        />



                    </ViewLabelCustom>

                    <ViewLabelCustom>
                        <LabelRow> Número </LabelRow>
                        <InputModal
                            value={numero}
                            placeholder={"Entre com o username:"}
                            onChangeText={setNumero}
                            keyboardType="default"
                            inputWidth={90}
                        />

                    </ViewLabelCustom>

                </ContainerCustom>



                <ViewBotao>
                    <BotaoVerde textoBotao="Confirmar" onPress={() => navigation.navigate("Home")} />
                </ViewBotao>

            </Container>

        </Fundo>
    )

    }

export default Cadastro;