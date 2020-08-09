import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import ListaEscala from "../pages/ListaEscala";

const {Navigator, Screen} = createStackNavigator();
// const ScreenStyles = {
//     headerTintColor: "#000",
//     headerStyle: {backgroundColor: "#0af346"},
// };

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Main" component={ListaEscala} options={{title: "e-Escala"}}>
                </Screen>
            </Navigator>
        </NavigationContainer>
    );
}
