import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListaEscala from "../pages/ListaEscala";

const Stack = createStackNavigator();
const ScreenStyles = {
    headerTintColor: "#000",
    headerStyle: { backgroundColor: "#0af346" },
};
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ScreenStyles}>
                <Stack.Screen name="Main" component={ListaEscala} options={{ title: "e-Escala" }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;
