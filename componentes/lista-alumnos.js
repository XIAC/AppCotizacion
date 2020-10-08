import React from 'react'
import {FlatList, Text} from 'react-native' 

function ListaAlumnos(props){
    const lista =[
        {
            key: '1',
            nombre: 'Marco',
            apellido: 'Marca'
        },
        {
            key: '2',
            nombre: 'Eber',
            apellido: 'Kachi'
        },
        {
            key: '3',
            nombre: 'Maeba',
            apellido: 'Fernandez'
        },
        {
            key: '4',
            nombre: 'Ariel',
            apellido: 'Vargas'
        },
        {
            key: '5',
            nombre: 'Erick',
            apellido:'Terrazas'
        }        
    ];
    return (
        <FlatList
            data = {lista}
            renderItem ={
            ({item}) => <Text style={{fontSize:20}}>{item.nombre}</Text>
            }
        />
    );
}

export default ListaAlumnos;