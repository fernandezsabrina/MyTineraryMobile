import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const LogIn = () => {
    return (
        <ImageBackground style={styles.container} source={require('../assets/bg2.jpg')}>
            <View style={styles.logoView}>
                <Image source={require('../assets/logomytinerary.png')} style={styles.logoImg}></Image>
            </View>
            <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <TextInput placeholder='Username' style={styles.input}>
                </TextInput>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.input}>
                </TextInput>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity>
                    <View style={styles.buttonLogin}>
                        <Text style={styles.texto}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.textoAcc}>You don't have an account?</Text>
                <TouchableOpacity>
                    <View style={styles.buttonRegister}>
                        <Text style={styles.texto}>REGISTER</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default LogIn

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    logoView: {
        height: 120,
        width: '90%',
        marginBottom: 50
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
        paddingLeft:20,
        paddingRight:20
    },
    textoAcc:{
        backgroundColor:'#6b395680',
        fontSize: 15,
        color: 'white',
        borderRadius:20,
        padding: 5,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:5,
    },
    buttonBox:{
        alignItems:'center'
    },
    buttonLogin: {
        backgroundColor: '#894789',
        marginBottom: 80,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    buttonRegister:{
        backgroundColor: '#b585a3',
        marginBottom: 30,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
}