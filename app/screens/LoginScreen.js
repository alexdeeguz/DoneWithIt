import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Screen style={styles.Screen}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <AppTextInput 
            placeholder="Email" 
            icon="email" 
            autoCapitalize="none" 
            autoCorrect={false} 
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={text => setEmail(text)}
            />
        <AppTextInput 
            placeholder="Password" 
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
            icon="lock"
            onChangeText={text => setPassword(text)}
        />

        <AppButton title="Login" onPress={() => console.log(email, password)}/>
        </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})