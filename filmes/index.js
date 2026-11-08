import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

import Detalhes from "../modal";

export default function InfoFilmes({ data }){
const [visibleModal, setVisibleModal] = useState(false);

    return(
        <View>
            
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image
                    source={{ uri: data.foto }}
                    style={styles.capa}
                />
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    },
    capa:{
        height: 360,
        width: 360,
        zIndex: 2,
    },
    titulo:{
        padding: 15,
        fontSize: 18,
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    botao:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    botaoTexto:{
        color: '#fff',
        textAlign: 'center'
    }
})