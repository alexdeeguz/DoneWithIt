import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched ,handleChange, errors, touched } = useFormikContext()
  return (
    <>
          <AppTextInput
            //   placeholder="Email"
            //   icon="email"
            //   autoCapitalize="none"
            //   autoCorrect={false}
            //   keyboardType="email-address"
            //   textContentType="emailAddress"
              onBlur={() => setFieldTouched(name)}
              onChangeText={handleChange(name)}
              {...otherProps}
          />
          <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField

const styles = StyleSheet.create({})