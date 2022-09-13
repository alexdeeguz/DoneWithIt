import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppButton from '../components/AppButton'

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        {/* <View style={styles.loginButton}></View> */}
        <View style={styles.buttonsContainer}>
            <AppButton title="Login" onPress={() => navigation.navigate('Login')}/>
              <AppButton title="Register" color='secondary' onPress={() => navigation.navigate('Register')} />
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: '100%',
        padding: 20
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
    tagline: {
        paddingVertical: 20,
        fontSize: 25,
        fontWeight: '600'
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