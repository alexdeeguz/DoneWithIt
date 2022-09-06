import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
    return (
        <Screen style={styles.screen}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

        <Formik 
            initialValues={{ email: '', password: ''}} 
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleSubmit, errors }) => (
                <>
                        <AppTextInput
                            placeholder="Email"
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onChangeText={handleChange('email')}
                        />
                        <AppText style={{ color: 'red' }}>{errors.email}</AppText>
                        <AppTextInput
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            icon="lock"
                            onChangeText={handleChange('password')}
                        />
                        <AppText style={{ color: 'red' }}>{errors.password}</AppText>
                        <AppButton title="Login" onPress={handleSubmit} />
                </>
            )}
        </Formik>
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
    },
    screen: {
        padding: 10
    }
})