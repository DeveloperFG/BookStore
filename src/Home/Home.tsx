import React, { useState, useEffect } from 'react';
import { Container, Logo, Title, Input, CenterView, Botao, 
          BotaoText, List, CartView, BotaoCart, CartQuant, TitleQuant } from './styles';

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

   <Container>
      <Modal
            visible={openModal}
            statusBarTranslucent={true}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.content}>
              <View style={styles.card}>
                    <View style={{width:'100%', height:'auto', flexDirection:'column', alignItems:'center', justifyContent:'space-between', padding: 4,}}>  
                        {listProdutos.map((item, index)=>(
                              <View key={index} style={{ width:"100%", height:'auto', flexDirection: 'row', alignItems:'center',
                                         justifyContent:'space-between', backgroundColor:'#039941', padding: 2, marginBottom: 10}}>
                                  <Text style={{color:'#ffffff', marginLeft:4, fontWeight: 500}}>{item.nome}</Text>
                                  <Text style={{color:'#ffffff', marginRight: 4}}>{item.preco}</Text>
                              </View>
                          ))}
                    </View>

                    {cart === null && (
                        <Text>
                           Você ainda não tem itens no carrinho...
                        </Text>
                    )}

  
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      width: "100%",
                      marginTop: 24,
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                  ]}
                  onPress={() => setOpenModal(false)}
                >
                  <Text style={[styles.text, { color: "black" }]}>Close</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>

    <CartView>
            <Icon name='users' size={30} color='#fff' onPress={()=> navigation.navigate('Users')}/>
        <BotaoCart onPress={handleModal}>
            <CartQuant>
              <TitleQuant> {listPedidosCart?.length} </TitleQuant>
            </CartQuant>
          <Icon name='shopping-cart' size={30} color='#fff'/>
        </BotaoCart>
    </CartView>

    <Logo> Book Store</Logo>

    <Title>Nome</Title>
    <Input 
    autoCapitalize="none" 
    autoCorrect={false} 
    value={nome}
    onChangeText={ (text) => setNome(text) }
    />

    <Title>Preço</Title>
    <Input 
    autoCapitalize="none" 
    autoCorrect={false}
    value={preco}
    onChangeText={ (text) => setPreco(text) }
    />

    <CenterView>
      <Botao 
      onPress={addBook}
      disabled={disabledBtn} 
      style={{opacity: disabledBtn ? 0.1 : 1 }}
      >
        <BotaoText>Cadastrar</BotaoText>
      </Botao>

      <Botao 
       onPress={editBook}
      >
        <BotaoText>Editar</BotaoText>
      </Botao>
    </CenterView>
 

    <List
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    data={books}
    keyExtractor={ item => String(item.id) }
    renderItem={ ({ item }) => ( <Books data={item}  editar={editarBook} excluir={excluirBook} comprar={comprarBook}  /> ) }
    /> 
   </Container>
  );
  
} 

// css para montar Modal
const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: '#000'
  },
    card: {
      width: "90%",
      padding: 20,
      backgroundColor: "white",
      borderRadius: 8,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    text: {
      fontWeight: "600",
      fontSize: 16,
      color: "white",
    },
    button: {
      width: "30%",
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      height: 56,
      borderRadius: 8,
    },
    
});
