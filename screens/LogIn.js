import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Button, Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import authActions from '../Redux/Actions/authActions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = (props) => {
    const [usuarioALoguear, setUsuarioALoguear] = useState({
        username:'',
        password:''
    })

    const [errores, setErrores] = useState([])

    const validarUser = async() => {
        const {username, password} = usuarioALoguear

        if (username === '' || password === '' || !username || !password) {
            ToastAndroid.show('All fields must be completed!', ToastAndroid.LONG)
            return false
        }
        setErrores([])
        const respuesta = await props.loginUser(usuarioALoguear)


        if (respuesta && !respuesta.success) {
            setErrores([respuesta.mensaje])
            console.log(errores)
            ToastAndroid.show(`${errores}`, ToastAndroid.LONG)
        } else {
            ToastAndroid.show("Welcome!", ToastAndroid.LONG)
            props.navigation.navigate("Homepage")
        }

    }


    return (
        <ImageBackground style={styles.container} source={require('../assets/bg2.jpg')}>
            <View style={styles.logoView}>
                <Image source={require('../assets/logomytinerary.png')} style={styles.logoImg}></Image>
            </View>
            <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <TextInput name="username" placeholder='Username' style={styles.input} onChangeText={(username) =>setUsuarioALoguear({...usuarioALoguear, username})}>
                </TextInput>
                <TextInput name="password" secureTextEntry={true} placeholder='Password' style={styles.input} onChangeText={(password) =>setUsuarioALoguear({...usuarioALoguear, password})}>
                </TextInput>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity>
                    <View style={styles.buttonLogin}>
                        <Text style={styles.texto} onPress={validarUser}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.textoAcc}>You don't have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                    <View style={styles.buttonRegister}>
                        <Text style={styles.texto}>REGISTER</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
}

const mapDispatchToProps = {
    loginUser: authActions.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

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