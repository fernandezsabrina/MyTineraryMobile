import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const Register = () => {
    const countries = [
        "Argentina", "México", "Brasil", "United States", "Spain", "Canada", "United Kingdom", "Japan", "Germany", "China", "France", "Italy", "New Zealand"
    ]
    return (
        <ImageBackground style={styles.container} source={require('../assets/bg7.jpg')}>
            <View style={styles.logoView}>
                <Image source={require('../assets/logomytinerary.png')} style={styles.logoImg}></Image>
            </View>
            <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center', marginBottom: 80 }}>
                <TextInput placeholder='Username' style={styles.input}>
                </TextInput>
                <TextInput placeholder='Name' style={styles.input}>
                </TextInput>
                <TextInput placeholder='Lastname' style={styles.input}>
                </TextInput>
                <TextInput placeholder='E-mail' style={styles.input}>
                </TextInput>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.input}>
                </TextInput>
                <RNPickerSelect style={customPickerStyles}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: "Country", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={
                     countries.map(country=>{
                         return(
                            { label: country, value: country }
                         )
                     })
                    
                 }
             />
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity>
                    <View style={styles.buttonLogin}>
                        <Text style={styles.texto}>CREATE ACCOUNT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Register

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logoView: {
        height: 120,
        width: '90%',
        marginBottom: 80
    },
    logoImg: {
        height: '100%',
        width: '100%'
    },
    input: {
        width: '80%',
        height: '30%',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 20,
        color: 'black',
        borderBottomWidth: 2,
        borderRadius: 20,
        backgroundColor: '#f1e8ed'
    },
    texto: {
        fontSize: 15,
        color: 'white',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    textoAcc: {
        backgroundColor: '#6b395680',
        fontSize: 15,
        color: 'white',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 5,
    },
    buttonBox: {
        alignItems: 'center'
    },
    buttonLogin: {
        backgroundColor: '#894789',
        marginBottom: 80,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    buttonRegister: {
        backgroundColor: '#b585a3',
        marginBottom: 30,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
}

const customPickerStyles = StyleSheet.create({
    inputAndroid: {
        width:250,
        backgroundColor:'white',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        textAlign:'center',
      },
    });