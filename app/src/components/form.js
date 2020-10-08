import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colores from '../utils/colores';
import RNPickerSelect from 'react-native-picker-select';
export default function Form(props){
    console.log("Props", props);
    const {setCapital, setInteres, setMeses} = props;
    return (
        <View style={estilo.formulario}>
            <View style={estilo.rowInput}>
                <TextInput 
                    style={estilo.input}
                    placeholder="Cantidad"
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                />
                <TextInput 
                    style= {[estilo.input, estilo.inputPersonalizado ]}
                    placeholder="Interes"
                    onChange={(e) => setInteres(e.nativeEvent.text)}

                />
            </View>
            <RNPickerSelect
                onValueChange={(value) => setMeses(value)}
                items={[
                    { label: '3 meses', value: '3' },
                    { label: '6 meses', value: '6' },
                    { label: '12 meses', value: '12' },
                    { label: '24 meses', value: '24' }
                ]}
            />
        </View>
    )
}
const estilo = StyleSheet.create({
    formulario: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colores.COLOR_PRIMARIO,
        borderRadius: 20,
        height: 100,
        justifyContent: 'center'
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    },
    inputPersonalizado: {
        width: "35%",
        marginLeft: 5
    },
    rowInput: {
        flexDirection: "row"
    }
})