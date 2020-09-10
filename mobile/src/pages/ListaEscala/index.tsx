import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ItemEscala from '../../components/ItemEscala';
import api from '../../services/Api';
import styles from "./styles";
import EscalaType from "../../interfaces/EscalaType";


// }function handleEscala(item: EscalaType) {
//     return ({item: {data, horario, local, ministro}}) => <ItemEscala data={data} horario={horario}
//                                                                      local={local}
//                                                                      ministro={ministro}/>;
// }

export default function ListaEscala() {
    const handleEscala = (item: EscalaType) => (
        <ItemEscala data={item.data} horario={item.horario} local={item.local} ministro={item.ministro}/>);
    const [escalas, setEscalas] = useState([]);
    useEffect(() => {
        async function loadEscalas() {
            const response = await api.get('/escalas');
            setEscalas(response.data);
        }

        loadEscalas();
    });
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={escalas}
                renderItem={({item: {data, horario, local, ministro}}) => <ItemEscala data={data} horario={horario}
                                                                                      local={local}
                                                                                      ministro={ministro}/>}
                keyExtractor={({id}) => id}
            />
        </SafeAreaView>
    );
}


