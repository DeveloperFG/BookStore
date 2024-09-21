import React from 'react';
import { Container, Nome, Preco, CenterView, Botao, BotaoText } from './styles';

export default function Books({ data, editar, excluir, comprar }) {

 return (
   <Container>
     <Nome> {data.nome} </Nome>
     <Preco> R$ {data.preco} </Preco>

     <CenterView>
       <Botao onPress={()=> editar(data) }>
         <BotaoText>Editar</BotaoText>
       </Botao>

       <Botao onPress={()=> excluir(data)}>
         <BotaoText>Excluir</BotaoText>
       </Botao>

       <Botao onPress={()=> comprar(data)}>
         <BotaoText>Carrinho</BotaoText>
       </Botao>
     </CenterView>

   </Container>
  );
}