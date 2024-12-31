import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/cart/slice';

import * as Us from './styles'

export default function Login(){

    const [load, setLoad] = useState(false);
    const navigation = useNavigation();

    // const { users, loading, cart } = useSelector((rootReducer) => rootReducer.cart)
    // const dispatch = useDispatch();

    // function handleUsers(){
    //     dispatch(fetchUsers())
    // }

   const handleLogar = () => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
           navigation.navigate('Home')
        }, 3000);
    }

    return(
       <ImageBackground source={require('../img/lofy.jpg')} style={styles.container}>
            <TextInput style={styles.input} placeholderTextColor='#fff' placeholder="Digite seu nome" />
            <TextInput style={styles.input} placeholderTextColor='#fff' placeholder="Digite sua senha" secureTextEntry={true} />

            <TouchableOpacity style={styles.btn} onPress={handleLogar}>
                {!load ? <Text style={styles.textBtn}>Logar</Text> : <ActivityIndicator size={20} color='#e52'/> } 
            </TouchableOpacity>
       </ImageBackground>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: 10,
        
    },
    btn:{
        width: '70%',
        backgroundColor: '#038037',
        padding: 10,
        borderRadius: 5
    },
    textBtn:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'bold'
    }
})