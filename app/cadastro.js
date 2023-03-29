import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import {Link} from 'expo-router';
import styles from '../style';

export default function Cadastro (){
    return(
        <View style={styles.container}>
        <Text style={styles.titleCadastro}>Cadastro de Endereço</Text>
        <TextInput style={styles.input} placeholder={'Endereço'} />
        <TextInput style={styles.input} placeholder={'00000-000'} />
        <TouchableOpacity>
            <Text style={styles.subtitleCadastro} >Buscar Dados</Text>
        </TouchableOpacity>
        </View>
    )
}