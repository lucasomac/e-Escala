import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ItemEscala from './ItemEscala';
import Constants from 'expo-constants';
import api from '../../services/Api';


export default function App() {
    const [escalas, setEscalas] = useState([]);
    useEffect(() => {
        async function loadEscalas() {
            const response = await api.get('/escala');
            setEscalas(response.data);
        }
        loadEscalas();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={escalas}
                renderItem={({ item }) => <ItemEscala escala={item} />}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 32,
    },
});
