import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Alert, Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import authActions from '../Redux/Actions/authActions'

const Header = (props) => {
    const logout = () => {
        Alert.alert(`${props.loggedUser.username}`, 'You want to log out?', [
            { text: 'Yes', onPress: () => props.logoutUser()},
            { text: 'No' }
        ])
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../assets/menu.png')} style={styles.menu}></Image>
                </TouchableOpacity>
                {props.loggedUser ?
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white', marginTop: 20, marginRight: 10 }}>Hello {props.loggedUser.username}!</Text>
                        <TouchableOpacity onPress={logout}>
                            <Image source={{ uri: `${props.loggedUser.urlpic}` }} style={styles.userLogged}></Image>
                        </TouchableOpacity>

                    </View>
                    :
                    <Image source={require('../assets/userblue.png')} style={styles.user}></Image>
                }

            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Image source={require('../assets/logomytinerary.png')} style={styles.logo}></Image>
            </View>
        </>
    )

}

const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
}

const mapDispatchToProps = {
    logoutUser: authActions.logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

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
    userLogged: {
        marginTop: 20,
        height: 50,
        width: 50,
        borderRadius: 30
    }

}