import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppPicker from '../AppPicker'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'


const AppFormPicker = ({ name, items, placeholder, PickerItemComponent, numColumns }) => {
  const { values, setFieldValue, touched, errors } = useFormikContext()
  return (
    <>
        <AppPicker 
            items={items}
            onSelectItem={item => setFieldValue(name, item)}
            placeholder={placeholder}
            selectedItem={values[name]}
            PickerItemComponent={PickerItemComponent}
            numColumns={numColumns}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  )
}

export default AppFormPicker

const styles = StyleSheet.create({})