import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Initial = (props) => {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg4final.png')} style={styles.bg}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Log In")}>
                        <View style={styles.buttonStart}>
                            <Text style={styles.texto}>GET STARTED</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>

            </View>
        </>
    )
}

export default Initial

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 15,
        color: 'white',
        padding: 8,
    },
    bg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    buttonStart: {
        backgroundColor: '#894789',
        marginBottom: 30,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
};