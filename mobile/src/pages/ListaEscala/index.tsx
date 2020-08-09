import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import ItemEscala from '../components/ItemEscala';
import api from '../services/Api';
import styles from "./styles";

export default function App() {
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
                renderItem={({item}) => <ItemEscala escala={item}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}


