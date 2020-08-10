import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ItemEscala from '../../components/ItemEscala';
import api from '../../services/Api';
import styles from "./styles";

export default function ListaEscala() {
    const [escalas, setEscalas] = useState([]);
    useEffect(() => {
        async function loadEscalas() {
            const response = await api.get('/escalas');
            setEscalas(response.data);
        }

        loadEscalas();
    }, []);
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


