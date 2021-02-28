import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Homepage = (props) => {
    return (
        <>
            <ScrollView>
                <View style={styles.header}>
                    <Image source={require('../assets/menu.png')} style={styles.menu}></Image>
                    <Image source={require('../assets/userblue.png')} style={styles.user}></Image>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image source={require('../assets/logomytinerary.png')} style={styles.logo}></Image>
                </View>
                <View style={styles.triplePic}>
                    <Image source={require('../assets/foto1.png')} style={styles.pictures}></Image>
                    <Image source={require('../assets/foto2.png')} style={styles.pictures}></Image>
                    <Image source={require('../assets/foto3.png')} style={styles.pictures}></Image>
                </View>
                <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} onPress={() => props.navigation.navigate("Cities")}>
                    <View style={styles.buttonStart}>
                        <Text style={styles.texto}>LET'S TRAVEL!</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.mainView}>
                    <Text style={styles.textCities}>And discover beautiful cities...</Text>
                    <Image source={require('../assets/cities.png')} style={styles.imgCities}></Image>
                </View>
            </ScrollView>
        </>
    )
}

export default Homepage

const styles = {
    header: {
        height: 80,
        backgroundColor: '#894789',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        height: 80,
        width: 300
    },
    menu: {
        marginTop: 15,
        height: 50,
        width: 50,
    },
    user: {
        marginTop: 15,
        height: 60,
        width: 60
    },
    triplePic: {
        height: 1000,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pictures: {
        width: '80%',
        height: 310
    },
    buttonStart: {
        backgroundColor: '#894789',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '50%',
        marginTop: 30,
    },
    texto: {
        fontSize: 15,
        color: 'white',
        padding: 8,
        textAlign: 'center'
    },
    mainView: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCities: {
        width: '100%',
        height: '70%'
    },
    textCities: {
        fontSize: 20,
        color: '#894789',
        padding: 20,
    }

}