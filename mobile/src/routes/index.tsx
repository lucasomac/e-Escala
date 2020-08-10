import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ListaEscala from "../pages/ListaEscala";

const {Navigator, Screen} = createStackNavigator();

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="e-Escala" component={ListaEscala}/>
            </Navigator>
        </NavigationContainer>
    );
}
