import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Image, ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import authActions from '../Redux/Actions/authActions'

const Header = (props) => {
  
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../assets/menu.png')} style={styles.menu}></Image>
                </TouchableOpacity>
                
                <Image source={require('../assets/userblue.png')} style={styles.user}></Image>
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
    
}