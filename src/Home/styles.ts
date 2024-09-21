import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: #373737;
padding-top: 5px;
`;

export const Logo = styled.Text`
font-size: 35px;
text-align: center;
color: #FFF;
font-weight: bold;
`;

export const Title = styled.Text`
font-size: 22px;
margin-left: 15px;
margin-top: 10px;
color: #FFF;
`;

export const Input = styled.TextInput`
height: 40px;
margin-left: 15px;
margin-bottom: 10px;
margin-right: 15px;
padding: 5px;
border-radius: 5px;
background-color: #FFF;
`;

export const CenterView = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-around;
`;

export const CartView = styled.View`
width: 100%;
align-items: flex-start;
flex-direction: row;
justify-content: space-between;
padding: 15px;

`;

export const CartQuant = styled.View`
  width: 18px;
  height: 18px;
  display: flex;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin-top: 60%;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  z-index: 99;
  position: absolute;

`;

export const TitleQuant = styled.Text`
font-size: 12px;
text-align: center;
color: #fff;
`;


export const Botao = styled.TouchableOpacity`
  background-color: #FFF;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
`;

export const BotaoText = styled.Text`
font-size: 17px;
text-align: center;
`;

export const BotaoCart = styled.TouchableOpacity`
  background-color: transparent;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 }
})`
  margin-top: 20px;
`;
