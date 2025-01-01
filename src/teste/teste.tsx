import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Teste(){

    const [cont, setCont] = useState(0)

    return(
        <View>
            <Text>Ol mundo</Text>

            <Text>{cont}</Text>
        </View>
    )

}