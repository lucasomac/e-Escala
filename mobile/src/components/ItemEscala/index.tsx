import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import api from '../../services/Api';
import moment from 'moment';
import 'moment/locale/pt-br';
import styles from "./styles";
import EscalaType from "../../interfaces/EscalaType";


function formatDate(data: string) {
    moment.locale("pt-br");
    return moment(data).format('LL').toUpperCase();
}

function ItemEscala(props: EscalaType) {
    const [name, setName] = useState();
    useEffect(() => {
        async function getName() {
            const response = await api.get('/byId/' + props.ministro);
            setName(response.data[0].name);
        }

        getName();
    });
    console.log(name)
    return (
        <View style={styles.item}>
            <Text style={styles.data}>{formatDate(props.data)}</Text>
            <Text style={styles.horario}>{props.horario}</Text>
            <Text style={styles.local}>{props.local}</Text>
            <Text style={styles.ministros}>{name}</Text>
        </View>
    );
}

export default ItemEscala;
