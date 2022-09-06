import { Image, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    name: Yup.string().required().label('Name')
})

const RegisterScreen = () => {
    return (
        <Screen style={styles.screen}>
            <AppForm
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="Name"
                    icon="account"
                    name="name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="name"
                />
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

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        padding: 10
    }
})