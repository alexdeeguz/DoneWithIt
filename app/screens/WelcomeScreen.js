import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from '../components/AppText'

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppText>Sell what you don't need</AppText>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
})