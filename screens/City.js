import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';

const City = () => {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Image source={require('../assets/menu.png')} style={styles.menu}></Image>
                <Image source={require('../assets/userblue.png')} style={styles.user}></Image>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Image source={require('../assets/logomytinerary.png')} style={styles.logo}></Image>
            </View>
        </ScrollView>
    )
}

export default City

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    texto: {
        fontSize: 15,
        color: 'white',
        padding: 8,
        textAlign: 'center'
    }
}