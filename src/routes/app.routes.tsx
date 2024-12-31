import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Home/Home";
import Users from "../Users/Users";
import Login from "../Login/Login";

const AppStack = createNativeStackNavigator();
export default function AppRoutes(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}  />
            <AppStack.Screen name="Home" component={Home}  options={{headerShown: false}} />
            <AppStack.Screen name="Users" component={Users} options={{ title: 'Lista de usuários' }}  />
        </AppStack.Navigator>
    )
}
