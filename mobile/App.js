import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ItemEscala from './src/ItemEscala';
import Constants from 'expo-constants';
const DATA = [{
  _id: '5e5aaf3a6724e41d7c9257ac',
  dia: "03/01/2020",
  horario: "07:00",
  local: "Santo Expedito",
  ministros: ["Leda", "Gleice"]
}
];
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ItemEscala title={item.title} />}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }, title: {
    fontSize: 32,
  },
});
