import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';

const City = (props) => {
    const [itineraries, setItineraries] = useState([])

    useEffect(() => {
        console.warn(props)
        fetch('https://mytineraryweb.herokuapp.com/city/id')
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
            <View style={styles.cityBox}>
                <Text style={styles.cityName}></Text>
                <Image style={styles.cityPic}></Image>
                <View style={styles.itineraryBox}>
                    <View style={styles.titleUser}>
                        <View style={styles.userInfo}>
                            <View style={styles.userPic}>
                            </View>
                            <Text style={{ color: 'white', marginTop: 10 }}>UserName</Text>
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.title}>Itinerary Title</Text>
                            <View style={styles.info}>
                                <View style={styles.hashtags}>

                                </View>
                                <View style={styles.likes}>
                                    <View style={styles.iconsBox}>
                                        <Image source={require('../assets/fullLike.png')} style={{ width: '50%', height: '50%', padding: '22%', margin: '10%' }}></Image>
                                        <Text style={{ color: 'white' }}>5</Text>
                                    </View>
                                    <View style={styles.iconsBox}>
                                        <Image source={require('../assets/clock.png')} style={{ width: '65%', height: '65%', padding: '30%', margin: '4%' }}></Image>
                                        <Text style={{ color: 'white' }}>6</Text>
                                    </View>
                                    <View style={styles.iconsBox}>
                                        <Image></Image>
                                        <Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.activitiesBox}>
                        <View style={styles.activity}>
                            <View style={styles.actPic}>
                                <Image source={require('../assets/michi.jpg')} style={{ width: '100%', height: '100%' }}></Image>
                            </View>
                            <Text style={styles.actTitle}>Activity Title</Text>
                        </View>
                        <View style={styles.activity}>
                            <View style={styles.actPic}>
                                <Image source={require('../assets/michi.jpg')} style={{ width: '100%', height: '100%' }}></Image>
                            </View>
                            <Text style={styles.actTitle}>Activity Title</Text>
                        </View>
                        <View style={styles.activity}>
                            <View style={styles.actPic}>
                                <Image source={require('../assets/michi.jpg')} style={{ width: '100%', height: '100%' }}></Image>
                            </View>
                            <Text style={styles.actTitle}>Activity Title</Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default City

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
    texto: {
        fontSize: 15,
        color: 'white',
        padding: 8,
        textAlign: 'center'
    },
    cityBox: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cityPic: {
        width: '100%',
        height: 200,
        backgroundColor: 'pink',
        marginBottom: 30,
    },
    cityName: {
        width: '100%',
        height: '5%',
        backgroundColor: 'violet',
        textAlign: 'center',
        marginBottom: 5,
        paddingTop: 7,
    },
    itineraryBox: {
        width: '95%',
        height: 300,
        backgroundColor: 'purple',
        marginBottom: 30,
        borderRadius: 20,
        flexDirection: 'column',

    },
    iconsBox: {
        width: '30%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleUser: {
        width: '100%',
        height: '40%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    userPic: {
        backgroundColor: 'pink',
        width: '100%',
        height: '55%',
        borderRadius: 100,
        marginTop: 10
    },
    titleInfo: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '80%',
        textAlign: 'center',
        marginBottom: 10,
        color: 'white'
    },
    info: {
        backgroundColor: 'purple',
        width: '90%',
        height: '70%'
    },
    hashtags: {
        backgroundColor: 'orange',
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    likes: {
        width: '100%',
        height: '60%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    activitiesBox: {
        height: '60%',
        width: '100%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    activity: {
        backgroundColor: 'orange',
        width: '30%',
        height: '80%',
        alignItems: 'center',
    },
    actPic: {
        height: '80%',
        width: '100%',
        backgroundColor: 'lightgreen',
    }
}