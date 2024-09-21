import React from "react";
import { View, Text, Button } from "react-native";

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/cart/slice';


export default function Users(){

    const { users, loading } = useSelector((rootReducer) => rootReducer.cart)
    const dispatch = useDispatch();

    function handleUsers(){
        dispatch(fetchUsers())
    }

    return(
        <View >
        
            <Button title="Carregar usuários" onPress={handleUsers}/>

                {loading && (
                    <Text>Carredando lista de usuários...</Text>
                )}

            <View >
                {!loading && users.map((user, index)=>(
                    <View key={index}>
                       <Text>ID: {user.id} | {user.name} </Text>    
                    </View>
                ))}
            </View>
        </View>
    )
}