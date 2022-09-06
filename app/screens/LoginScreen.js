import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/SubmitButton'
import AppForm from '../components/AppForm'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
    return (
        <Screen style={styles.screen}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

            <AppForm 
                initialValues={{ email: '', password: ''}} 
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                    <AppFormField
                        placeholder="Email"
                        icon="email"
                        name="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        placeholder="Password"
                        autoCapitalize="none"
                        name="password"
                        autoCorrect={false}
                        secureTextEntry
                        textContentType="password"
                        icon="lock"
                    />
                    <SubmitButton title="Login" />
            </AppForm>
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