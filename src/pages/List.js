import React,  {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, ScrollView, StyleSheet , SafeAreaView, KeyboardAvoidingView , Platform , TouchableOpacity,  Text, TextInput } from 'react-native';

import SpotList from '../components/Spotlist'
import logo from '../../assets/logo.png'

export default function List() {
    
    const [techs, setTechs] = useState([]) ;

    useEffect(()=>{
      AsyncStorage.getItem('techs').then(storagedTechs => {
          const techsArray = storagedTechs.split(',').map(tech => tech.trim());

          setTechs(techsArray);
      })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView> 
            <Image style={styles.logo} source={logo} />
            {techs.map(tech => <SpotList key={tech} tech={tech} /> )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 

    },
    logo : {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 45,
    }
})