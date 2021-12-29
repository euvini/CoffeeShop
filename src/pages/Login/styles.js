import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #22282C;
    flex: 1;
    padding: 30px 0;
`;

export const Logo = styled.Image`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    top: 15%;
`;

export const Title = styled.Text`
    color: #00643B;
    font-size: 34px;
    font-weight: bold;
    display: flex;
    align-self: center;
    margin-top: 25%;
`;
export const LoginArea = styled.View`
    background-color: #2D333A;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    border-radius: 30px;
    
`;
export const Input = styled.TextInput`
    background-color: rgba( 196, 196, 196, 0.2 );
    box-shadow: 8px 8px 8px #22282C;
    height: 50px;
    width: 300px;
    border-radius: 10px;
    color: #E4E5E4;
    padding: 10px;
`;
export const InputIdentifier = styled.Text`
    color: #E4E5E4;
    margin-top: 20px;
    
`;
export const InputContainer = styled.View`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 50px;
`;

export const LoginButtom = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;
    background-color: #00643B;
    box-shadow: 8px 8px 8px #22282C;
    height: 50px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 50px;
`;

export const ButtomIdentifier = styled.Text`
    color: #E4E5E4;
    font-size: 18px;
    align-self: center;
    justify-content: center;
`;

export const ButtomContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 5px;
`;
 export const Buttom = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;
    margin-left: 2px;
    background-color: #3A6050;
    box-shadow: 8px 8px 8px #22282C;
    height: 50px;
    width: 148px;
    border-radius: 10px;
    padding: 10px;
 `;







