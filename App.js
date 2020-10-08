import { StatusBar } from 'expo-status-bar';
import React, {Fragment, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListaAlumnos from './componentes/lista-alumnos';
import colores from './app/src/utils/colores';
import Formulario from './app/src/components/form';
import Footer from './app/src/components/footer';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);

  const calcular = () =>{
    console.log("TOTAL: ",total);
    console.log("capital->", capital);
    console.log("interes->", interes);
    console.log("meses->", meses);
    if(!capital){
      console.log("ingrese capital");
    } else if(!interes){
      console.log("ingrese interes");
    }  else if(!meses){
      console.log("seleccione meses");
    } else{
      console.log("OK");
    }
    const i = interes / 100;
  
    const datoCalcular = capital / ((1 - Math.pow(i + 1, -meses)) /i);
    console.log(datoCalcular.toFixed(2).replace('.',','));
    setTotal({
      montoMes: datoCalcular.toFixed(2).replace('.',','),
      totalPagado: (datoCalcular * meses).toFixed(2).replace('.',',')
    })
  }
  return (
    <Fragment>
      <View style={styles.contenedorTitulo}>
        <Text style={styles.titulo}> COTIZADOR DE PRESTAMO</Text>
        <Formulario setCapital={setCapital} setInteres={setInteres} setMeses={setMeses}/>
      </View>
      <View>
        <Text>Resultado</Text>
      </View>
        {/* <Button title="Calcular" onPress={calcular}/> */}
        {/* <Text>Footer</Text> */}
      <Footer calcular={calcular}/>
    </Fragment>

  );
}
const styles = StyleSheet.create({
  contenedorTitulo: {
  backgroundColor: colores.COLOR_OSCURO,
  height: 200,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  alignItems: "center",
 },
 titulo: {
   fontSize: 30,
   fontWeight: 'bold',
   color: '#fff',
   marginTop: 25
 }
});
