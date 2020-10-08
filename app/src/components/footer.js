import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import  colores from '../utils/colores'
export default function Footer(props) {
    const {calcular} = props
  return (
    <View style={estilo.disenoFooter}>
        <TouchableOpacity style={estilo.boton} onPress={calcular}>
            <Text style={estilo.texto}>Calcular</Text>
        </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
    disenoFooter: {
        position: "absolute",
        bottom: 0,
        width:"100%",
        backgroundColor: colores.COLOR_PRIMARIO,
        height: 100,
        borderTopLeftRadius:10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent:"center"
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'#fff',
        textAlign:'center'
    },
    boton:{
        backgroundColor: colores.COLOR_OSCURO,
        padding: 16,
        borderRadius: 20,
        width: "75%"
    }
});