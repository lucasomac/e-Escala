import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListaEscala from "../components/ListaEscala";

const Stack = createStackNavigator();
const ScreenStyles = {
    headerTintColor: "#000",
    headerStyle: { backgroundColor: "#0af346" },
};
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ScreenStyles}>
                <Stack.Screen name="Main" component={ListaEscala} options={{ title: "EscalaMinisterial" }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;
