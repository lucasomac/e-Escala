import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ItemEscala({ escala }) {
    return (
        <View style={styles.item}>
            <Text style={styles.dia}>{escala.dia}</Text>
            <Text style={styles.horario}>{escala.horario}</Text>
            <Text style={styles.local}>{escala.local}</Text>
            <Text style={styles.ministros}>{escala.ministros.join(' ')}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EE8925',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        borderRadius: 15
    },
    dia: {
        fontSize: 32,
        textAlign: "center",
        // borderColor:"FFF",
        borderRadius: 12
    },
    horario: {
        textAlign: "center",
        fontSize: 28,
    },
    local: {
        textAlign: "center",
        fontSize: 25,
    },
    ministros: {
        textAlign: "center",
        fontSize: 25,
    }

});