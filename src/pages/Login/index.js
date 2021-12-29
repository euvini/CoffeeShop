import React from "react";
import {
    Container,
    Logo,
    Title,
    LoginArea,
    Input,
    InputIdentifier,
    InputContainer,
    LoginButtom,
    ButtomIdentifier,
    ButtomContainer,
    Buttom
} from "./styles";

export default function Login() {
    return (
        <Container>
            <Logo
                source={require('../../assets/Logo.png')}
            />
            <Title>COFFEE SHOP</Title>

            <LoginArea>
                <InputContainer>
                    <InputIdentifier>Usuário:</InputIdentifier>
                    <Input
                        placeholder="Digite seu usuário"
                        placeholderTextColor="#E4E5E4"
                    />

                    <InputIdentifier>Senha:</InputIdentifier>
                    <Input
                        placeholder="Digite sua senha"
                        placeholderTextColor="#E4E5E4"
                    />
                </InputContainer>

                <LoginButtom>
                    <ButtomIdentifier>ENTRAR</ButtomIdentifier>
                </LoginButtom>
                <ButtomContainer>
                    <Buttom>
                        <ButtomIdentifier>Cadastrar</ButtomIdentifier>
                    </Buttom>
                    <Buttom>
                        <ButtomIdentifier>Apple Sign Up</ButtomIdentifier>
                    </Buttom>
                </ButtomContainer>
            </LoginArea>
        </Container>
    )
}