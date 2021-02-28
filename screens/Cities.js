import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Cities = (props) => {
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch('https://mytineraryweb.herokuapp.com/cities')
            .then(res => res.json())
            .then(data => setCities(data.respuesta))
    })

    return (
        <ScrollView>

            <View style={styles.header}>
                <Image source={require('../assets/menu.png')} style={styles.menu}></Image>
                <Image source={require('../assets/userblue.png')} style={styles.user}></Image>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Image source={require('../assets/logomytinerary.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.boxTitle}>
                <Text style={styles.titleCities}>CITIES</Text>
                <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
                    <Image source={require('../assets/lupa.png')} style={{ width: 25, height: 25, marginRight: 10 }}></Image>
                    <TextInput placeholder='Search'></TextInput>
                </View>
            </View>
            <View style={styles.boxCities}>
                {cities.map((city, i) => {
                    return (
                        <View key={i} style={styles.city} >
                            <TouchableOpacity style={{width:400}} onPress={() => props.navigation.navigate("City", city)}>
                                <ImageBackground style={styles.cityPic} source={{ uri: `${city.url}` }}>
                                    <Text style={styles.textCity}>{`${city.name}`}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    )
                })}

            </View>

        </ScrollView>
    )
}

export default Cities

const styles = {
    header: {
        width: '100%',
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
    texto: {
        fontSize: 15,
        color: 'white',
        padding: 8,
        textAlign: 'center'
    },
    boxTitle: {
        alignItems: 'center',
        marginBottom: 10
    },
    titleCities: {
        fontSize: 40,
        color: 'purple',
    },
    boxCities: {
        width: '100%',
        height: 3000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    city: {
        width: '90%',
        height: '6%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCity: {
        width: '100%',
        height: 25,
        backgroundColor: '#6b395680',
        textAlign: 'center',
        color: 'white'
    },
    cityPic: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }

}