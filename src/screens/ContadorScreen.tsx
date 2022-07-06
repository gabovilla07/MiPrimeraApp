import React, { useState, useEffect } from 'react';
import { Button, Text, TouchableOpacity, View, StyleSheet, Image, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import moment from 'moment';

//import appFirebase from '../../database/firebaseDB.js';
//import { getFirestore, collection, getDocs, updateDoc, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import axios from 'axios';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
    const [timer, setTimer] = useState('00:00:00')

    useEffect(() => {
        let myInterval = setInterval(() => {
            if(minutes === 15) {
                clearInterval(myInterval); 
                setSeconds(0);
                setMinutes(0);
                Alert.alert('Conteo registrado con exito')
                return;
            } else {
                if(seconds === 900) {
                    Alert.alert('Conteo registrado con exito')
                    setSeconds(0);
                    setMinutes(minutes + 1); 
                    storePeopleCounter();
                } else {
                    setSeconds(seconds + 1);
                    
                }
            }
        }, 1000);

        return ()=> {
            clearInterval(myInterval);
        };
    });

    const getPeopleCounter = async() => {
        const response = await axios.get('http://10.67.22.99:3000/api/people');

        console.log(response.data);
    }
    

    const storePeopleCounter = async() => {
        const now = new Date();
        const hours = now.getHours();
        const turn = hours >= 13 ? 'OP' : 'MID'; 
        

        const dateRow = moment().format('YYYY-MM-DD HH:mm:ss');

        const counterForm = {
            'fecha': dateRow,
            'cant': contador,
            'turno': turn,
        }; 
            

        const response = await axios.post('http://10.67.22.99:3000/api/people', counterForm);
        console.log(response.data);

        setContador(0);
    }


    const sumQuantity = async() => {
        await setContador(contador + 1);
    }
    

    
    return (
    <>
    
    <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../images/PriceSmart_Logo.png")}
            />
            {/* { <Text style={styles.tittle}>Time: {seconds}</Text> } */}
            <Text style={styles.tittle}>Count: {contador}</Text>
            {/* Boton para agregar */}
            <TouchableOpacity
            
                onPress={() => sumQuantity()}
                

            >
                <View style={styles.bottonagregar}>
                    <Text style={styles.textobotton}>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
       </>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:5,
        backgroundColor:"#000080",
        justifyContent:"center"
    },
    tittle:{
        textAlign:"center",
            fontSize: 40,
            color:"white",
            top: 185
    },
    bottonagregar:{
        backgroundColor:"#DC143C",
                borderRadius:20,
                padding: 10,
                marginTop: 240,
                width:200,
                alignSelf:"center"
    },
    textobotton:{
        color:"white",
                    textAlign:"center",
                    fontSize: 30
    },
    logo:{
        width: 440,
        height: 175,
        alignSelf: "center",
        marginTop: -290,
        borderRadius: 35
    }

})
function setContador(arg0: any) {
    throw new Error('Function not implemented.');
}

