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

export const Modal = styled.Modal`

`;

export const ViewCenterModal = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);

`;

export const ViewCardModal = styled.View`
    width: 90%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
`;

export const ViewCardItensModal = styled.View`
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
`;

export const ViewCardVazioModal = styled.View`
   margin-bottom: 8px;
`;

export const TituloCardVazioModal = styled.Text`
  font-weight: 700;
`;

export const ViewListItensModal = styled.View`
    width: 100%;
    height: auto;
    background-color: #039941;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    margin-bottom: 10px;
`;

export const TituloItensCartModal = styled.Text`
    color: #fff ;
    margin-left: 4px;
    font-weight: 500;
`;

export const TextoItensCartModal = styled.Text`
    color: #fff ;
    margin-left: 4px;
`;


export const ButtonCardModal = styled.TouchableOpacity`
    width: 100%;
    background-color: gray;
    justify-content: center;
    align-items: center;
    height: 56px;
    border-radius: 8px;
`;

export const TextoCloseCardModal = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 }
})`
  margin-top: 20px;
`;
