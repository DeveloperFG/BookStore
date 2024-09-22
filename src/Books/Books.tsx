import React from 'react';

import * as Bo from './styles'

export default function Books({ data, editar, excluir, comprar }) {

 return (
   <Bo.Container>
     <Bo.Nome> {data.nome} </Bo.Nome>
     <Bo.Preco> R$ {data.preco} </Bo.Preco>

     <Bo.CenterView>
       <Bo.Botao onPress={()=> editar(data) }>
         <Bo.BotaoText>Editar</Bo.BotaoText>
       </Bo.Botao>

       <Bo.Botao onPress={()=> excluir(data)}>
         <Bo.BotaoText>Excluir</Bo.BotaoText>
       </Bo.Botao>

       <Bo.Botao onPress={()=> comprar(data)}>
         <Bo.BotaoText>Carrinho</Bo.BotaoText>
       </Bo.Botao>
     </Bo.CenterView>

   </Bo.Container>
  );
}