import React from "react";

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/cart/slice';

import * as Us from './styles'

export default function Users(){

    const { users, loading } = useSelector((rootReducer) => rootReducer.cart)
    const dispatch = useDispatch();

    function handleUsers(){
        dispatch(fetchUsers())
    }

    return(
        <Us.Container >
            <Us.Button title="Carregar usuários" onPress={handleUsers}/>

                {loading && (
                    <Us.TextoLoadList>Carredando lista de usuários...</Us.TextoLoadList>
                )}

            <Us.ViewCenter >
                {!loading && users.map((user, index)=>(
                    <Us.ViewItens key={index}>
                       <Us.TextoList>ID: {user.id} | {user.name} </Us.TextoList>    
                    </Us.ViewItens>
                ))}
            </Us.ViewCenter>
        </Us.Container>
    )
}