import React from 'react';
import {Text, View} from 'react-native';
import api from '../../services/Api';
import moment from 'moment';
import 'moment/locale/pt-br'
import styles from "./styles";
import EscalaType from "../../interfaces/EscalaType";

moment.locale('pt-br');

function formatDate(data: string) {
    return moment(data).format('LL');
}

async function retorna(id: number) {
    return await (await api.get(`/byId/${id}`)).data;
}

function ItemEscala(escala: EscalaType) {
    var name = retorna(escala.ministro);
    console.log(name)
    return (
        <View style={styles.item}>
            <Text style={styles.data}>{formatDate(escala.data)}</Text>
            <Text style={styles.horario}>{escala.horario}</Text>
            <Text style={styles.local}>{escala.local}</Text>
            <Text style={styles.ministros}>{escala.ministro}</Text>
        </View>
    );
}

export default ItemEscala;
