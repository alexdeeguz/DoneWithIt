import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

const FormImagePicker = ({ name }) => {

  const { values, setFieldValue, touched, errors } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter(el => el !== uri))
  }
  return (
    <>
        <ImageInputList 
            imageUris={imageUris}
            onAddImage={handleAdd}    
            onRemoveImage={handleRemove}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormImagePicker

const styles = StyleSheet.create({})