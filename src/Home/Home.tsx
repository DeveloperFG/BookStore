import React, { useState, useEffect } from 'react';

import * as Ho from './styles'

import { StyleSheet, Text, View, Modal,TouchableOpacity, Keyboard } from 'react-native';

import { useDispatch } from 'react-redux'
import { createCart } from '../redux/cart/slice';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'

import Books from '../Books/Books';
import getRealm from '../services/realm';

import { useSelector } from 'react-redux'

export default function Home() {


  const { cart } = useSelector((rootReducer) => rootReducer.cart)

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [idEdit, setIdEdit] = useState(null);
  const [books, setBooks] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const [listPedidosCart, setListPedidosCart] = useState([]);

  const [listProdutos, setListProdutos] = useState([])

  const [openModal, setOpenModal] = useState(false);

  useEffect(()=>{

    loadBooks = async () => {
      const realm = await getRealm();
      const data = realm.objects('Book');
      setBooks(data);
    }

    loadBooks();

  }, []);


  useEffect(()=>{

    if(cart !== null ) {
        let novaLista = {
          id: cart.id,
          nome: cart.nome,
          preco: cart.preco,
    
        }
  
    setListProdutos(lista => [...lista, novaLista])
    }

  }, [cart]);


  saveBook = async (data) => {
      const realm = await getRealm();

      const id = realm.objects('Book').sorted('id', true).length > 0
      ? realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

      const dadosLivro = {
        id: id,
        nome: data.nome,
        preco: data.preco
      }

      realm.write(()=>{
        realm.create('Book', dadosLivro)
      });

    }



  addBook = async (data) => {
    if(nome === '' || preco === ''){
      alert('Preecha todos os campos!');
      return;
    }

    try{
    const data = { nome: nome, preco: preco };
    await saveBook(data);

    setNome('');
    setPreco('');
    Keyboard.dismiss();

    }catch(err){
      alert(err);
    }
  }


    editarBook = async (data) => {
      setNome(data.nome)
      setPreco(data.preco)
      setIdEdit(data.id);
      setDisabledBtn(true);

    }


  
    editBook = async () => {
      if(idEdit === null){
        alert('Você não pode editar!');
        return;
      }

      const realm = await getRealm();

      const response = {
        id: idEdit,
        nome: nome,
        preco: preco
      };

      await realm.write(()=>{
        realm.create('Book', response, 'modified')
      });


      const dadosAlterados = await realm.objects('Book').sorted('id', false);
        setBooks(dadosAlterados);
        setNome('');
        setPreco('');
        setIdEdit(null);
        setDisabledBtn(false);
        Keyboard.dismiss();

      }

  excluirBook = async (data) => {
      const realm = await getRealm();
      const ID = data.id;
      console.log(ID);

      realm.write(()=>{
        if(realm.objects('Book').filtered('id ='+ ID).length > 0){
          realm.delete(
            realm.objects('Book').filtered('id ='+ ID)
          )
        }
      })

      const livrosAtuais = await realm.objects('Book').sorted('id', false).toJSON();
      setBooks(livrosAtuais);

    }

    comprarBook = async (data) => {

      let selectBook = {
        id: data.id,
        nome: data.nome,
        preco: data.preco,

      }
     
      setListPedidosCart(produtos => [...produtos, selectBook])

      dispatch(createCart({
        id: data.id,
        nome: data.nome,
        preco: data.preco

      }))

      alert('Item adicionado')

    }

      function handleModal(){
         setOpenModal(true)

    }

 return (

   <Ho.Container>
      <Ho.Modal
            visible={openModal}
            statusBarTranslucent={true}
            transparent={true}
            animationType="slide"
          >
            <Ho.ViewCenterModal>
              <Ho.ViewCardModal>
                    <Ho.ViewCardItensModal>  

                    {cart != null && (
                         <Ho.ViewCardVazioModal>
                            <Ho.TituloCardVazioModal>ITENS NO CARRINHO...</Ho.TituloCardVazioModal>
                          </Ho.ViewCardVazioModal>
                    )}

                        {listProdutos.map((item, index)=>(
                              <Ho.ViewListItensModal key={index}>
                                  <Ho.TituloItensCartModal>{item.nome}</Ho.TituloItensCartModal>
                                  <Ho.TextoItensCartModal >{item.preco}</Ho.TextoItensCartModal>
                              </Ho.ViewListItensModal>
                          ))}
                    </Ho.ViewCardItensModal>

                    {cart === null && (
                        <Ho.TituloCardVazioModal>
                           Você ainda não tem itens no carrinho...
                        </Ho.TituloCardVazioModal>
                    )}

  
                <Ho.ButtonCardModal
                  onPress={() => setOpenModal(false)}
                >
                  <Ho.TextoCloseCardModal>Close</Ho.TextoCloseCardModal>
                </Ho.ButtonCardModal>

              </Ho.ViewCardModal>
            </Ho.ViewCenterModal>
          </Ho.Modal>

    <Ho.CartView>
            <Icon name='users' size={30} color='#fff' onPress={()=> navigation.navigate('Users')}/>
        <Ho.BotaoCart onPress={handleModal}>
            <Ho.CartQuant>
              <Ho.TitleQuant> {listPedidosCart?.length} </Ho.TitleQuant>
            </Ho.CartQuant>
          <Icon name='shopping-cart' size={30} color='#fff'/>
        </Ho.BotaoCart>
    </Ho.CartView>

      <Ho.Logo> Book Store</Ho.Logo>

      <Ho.Title>Nome</Ho.Title>
          <Ho.Input 
          autoCapitalize="none" 
          autoCorrect={false} 
          value={nome}
          onChangeText={ (text) => setNome(text) }
      />

      <Ho.Title>Preço</Ho.Title>
          <Ho.Input 
          autoCapitalize="none" 
          autoCorrect={false}
          value={preco}
          onChangeText={ (text) => setPreco(text) }
      />

      <Ho.CenterView>
          <Ho.Botao 
            onPress={addBook}
            disabled={disabledBtn} 
            style={{opacity: disabledBtn ? 0.1 : 1 }}
          >
            <Ho.BotaoText>Cadastrar</Ho.BotaoText>
          </Ho.Botao>

          <Ho.Botao 
          onPress={editBook}
          >
            <Ho.BotaoText>Editar</Ho.BotaoText>
          </Ho.Botao>
      </Ho.CenterView>
  

      <Ho.List
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={books}
        keyExtractor={ item => String(item.id) }
        renderItem={ ({ item }) => ( <Books data={item}  editar={editarBook} excluir={excluirBook} comprar={comprarBook}  /> ) }
        /> 
    </Ho.Container>
    );
    
  } 
