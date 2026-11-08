import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

import api from "./sevices/api";
import InfoFilmes from "./filmes";

export default function App()
{
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');

      setFilmes(response.data); 
    }

    loadFilmes();

  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <InfoFilmes data={item} />}
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