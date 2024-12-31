import React from "react";

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/cart/slice';

import * as Us from './styles'
import { Image } from "react-native";

export default function Users(){

    const { users, loading, cart } = useSelector((rootReducer) => rootReducer.cart)
    const dispatch = useDispatch();

    function handleUsers(){
        dispatch(fetchUsers())
    }


    return(
        <Us.Container >
            {users == '' &&(
                <Us.Button title="Carregar usuários" onPress={handleUsers}/>
            )}
           
                {loading && (
                    <Us.TextoLoadList>Carredando lista de usuários...</Us.TextoLoadList>
                )}

            <Us.ViewCenter >
                {!loading && users.map((user, index)=>(
                    <Us.ViewItens key={index}>
                       <Us.TextoList>ID: {user.id} | {user.nome} </Us.TextoList>    
                       <Image width={100} height={100} style={{objectFit:'contain'}} source={{uri: user.url }}/>
                    </Us.ViewItens>
                ))}
            </Us.ViewCenter>
        </Us.Container>
    )
}