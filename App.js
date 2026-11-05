import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

import api from "./sevices/api";
import filmes from './filmes'

export default function App()
{
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
    }

    loadFilmes();

  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={ item => String(item.id) }
        renderItem={({ item }) => <Filmes data={item} /> }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginInline: 2
  },
  text:{
    fontSize: 24,
    color: '#000'
  }
})