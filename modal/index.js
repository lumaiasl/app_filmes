import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes(props){

    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={ props.voltar }>
                    <Text style={{color: '#FFF', fontSize: 16}}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer:{
        width: '90%',
        height: '80%',
        backgroundColor: '#121212',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    btnVoltar: {
        backgroundColor: '#E52246',
        padding: 10,
    },
    titulo: {
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 24,
    },
    sinopse:{
        color: '#FFF',
        fontSize: 16,
        marginBotton: 8,
        marginLeft: 10,
    },
    descricao:{
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
    }
})