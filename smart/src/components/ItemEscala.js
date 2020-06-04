import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from '../services/Api';
import moment from 'moment';
import 'moment/locale/pt-br'
moment.locale('pt-br');

function formatDate(data) {
    return moment(data).format('LL');
}
async function retorna(id) {
    return await api.get(`/byId/${escala.ministro}`);
}
export default function ItemEscala({ escala }) {
    var { name } = retorna(escala.ministro);
    return (
        <View style={styles.item}>
            <Text style={styles.data}>{formatDate(escala.data)}</Text>
            <Text style={styles.horario}>{escala.horario}</Text>
            <Text style={styles.local}>{escala.local}</Text>
            <Text style={styles.ministros}>{name}</Text>
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
    data: {
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