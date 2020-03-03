import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ItemEscala({ escala }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{escala.dia}</Text>
            <Text style={styles.title}>{escala.horario}</Text>
            <Text style={styles.title}>{escala.local}</Text>
            <Text style={styles.title}>{escala.ministros}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        borderRadius: 15
    }, title: {
        fontSize: 32,
    }

});