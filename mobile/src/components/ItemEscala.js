import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';


function formatDate(data) {
    Moment.locale('pt-BR');
    return Moment(data).format('DD/MM/YYYY');
}

export default function ItemEscala({ escala }) {
    return (
        <View style={styles.item}>
            <Text style={styles.dia}>{formatDate(escala.dia)}</Text>
            <Text style={styles.horario}>{escala.horario}</Text>
            <Text style={styles.local}>{escala.local}</Text>
            <Text style={styles.ministros}>{escala.ministros.join(' | ')}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#0af346',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom: 8,
        flex: 1,
        borderRadius: 15
    },
    dia: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center"
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
        color: "#FFF"
    }

});