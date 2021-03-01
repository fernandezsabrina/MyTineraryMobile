import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/Header'

const Homepage = (props) => {
    return (
        <>
            <ScrollView>
                <Header></Header>
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