import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/Header'

const City = (props) => {
    const [itineraries, setItineraries] = useState([])
    const cityId = props.route.params._id

    useEffect(() => {
        fetch(`https://mytineraryweb.herokuapp.com/itineraries/${cityId}`)
            .then(res => res.json())
            .then(data => setItineraries(data.respuesta))
    })
    return (
        <ScrollView>
            <Header></Header>
            <View style={styles.cityBox}>
                <Text style={styles.cityName}>{props.route.params.name}</Text>
                <Image style={styles.cityPic} source={{ uri: `${props.route.params.url}` }}></Image>
                {itineraries.length === 0 ?
                    <View style={styles.noItineraryBox}>
                        <Text>Sorry, we have no itineraries yet...</Text>
                    </View>
                    :
                    itineraries.map((itinerary, i) => {
                        return (
                            <View style={styles.itineraryBox} key={i}>
                                <View style={styles.titleUser}>
                                    <View style={styles.userInfo}>
                                        <Image style={styles.userPic} source={{ uri: `${itinerary.userPic}` }}>
                                        </Image>
                                        <Text style={{ color: 'white', marginTop: 10 }}>{itinerary.userName}</Text>
                                    </View>
                                    <View style={styles.titleInfo}>
                                        <Text style={styles.title}>{itinerary.title}</Text>
                                        <View style={styles.info}>
                                            <View style={styles.hashtags}>
                                                {itinerary.hashtag.map(hash => {
                                                    return (
                                                        <Text style={{ padding: 1.5, color: 'purple' }}>{hash}</Text>
                                                    )
                                                })}

                                            </View>
                                            <View style={styles.likes}>
                                                <View style={styles.iconsBox}>
                                                    <Image source={require('../assets/fullLike.png')} style={{ width: '50%', height: '50%', padding: '22%', margin: '10%' }}></Image>
                                                    <Text style={{ color: 'white' }}>{itinerary.likes}</Text>
                                                </View>
                                                <View style={styles.iconsBox}>
                                                    <Image source={require('../assets/clock.png')} style={{ width: '65%', height: '65%', padding: '30%', margin: '4%' }}></Image>
                                                    <Text style={{ color: 'white' }}>{itinerary.duration}</Text>
                                                </View>
                                                <View style={styles.iconsBox}>
                                                    <Text style={{ color: 'lightgreen', fontSize: 20 }}>{Array(itinerary.price).fill("$")}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.activitiesBox}>
                                    {itinerary.activities.map(activity => {
                                        return (
                                            <View style={styles.activity}>
                                                <View style={styles.actPic}>
                                                    <Image source={{ uri: `${activity.activityPic}` }} style={{ width: '100%', height: '100%' }}></Image>
                                                </View>
                                                <Text style={styles.actTitle}>{activity.activityTitle}</Text>
                                            </View>
                                        )
                                    })}

                                </View>

                            </View>
                        )

                    })

                }

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
        color: 'white',
        fontSize: 30,
        backgroundColor: 'purple',
        textAlign: 'center',
        marginBottom: 5,
        paddingTop: 7,
    },
    noItineraryBox: {
        width: '95%',
        height: 200,
        backgroundColor: 'purple',
        marginBottom: 30,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
    userInfo: {
        width: '30%',
        justifyContent: 'center',
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
        width: '80%',
        height: '80%',
        borderRadius: 100,
        marginTop: 20
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
        color: 'white',
        marginTop: 20
    },
    info: {
        backgroundColor: 'purple',
        width: '90%',
        height: '70%'
    },
    hashtags: {
        backgroundColor: 'pink',
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        borderRadius: 5
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
        backgroundColor: 'violet',
        width: '30%',
        height: '85%',
        alignItems: 'center',
        borderRadius:10
    },
    actPic: {
        height: '70%',
        width: '100%',
        backgroundColor: 'lightgreen',
    },
    actTitle: {
        color:'white',
        textAlign:'center',
        fontSize:13
    }
}