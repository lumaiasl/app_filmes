import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function filmes({ data }){
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
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <Text></Text>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2,
    },
    capa:{
        height: 32,
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