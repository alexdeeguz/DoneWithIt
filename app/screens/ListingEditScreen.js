import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import AppForm from '../components/forms/AppForm'
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField'
import AppPicker from '../components/AppPicker'
import SubmitButton from '../components/forms/SubmitButton'
import { ErrorMessage } from 'formik'
import AppFormPicker from '../components/forms/AppFormPicker'

const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.string().required(),
    category: Yup.string('Category is required').required('Category is required'),
    description: Yup.string().required()
})

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 },
]

const ListingEditScreen = () => {
  return (
    <Screen style={styles.screen}>
        <AppForm 
            initialValues={{ 
                title: '',
                price: '',
                description: '',
                category: ''
            }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
              <AppFormField
                  placeholder="Title"
                  name="title"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
              />
              <AppFormField
                  placeholder="Price"
                  name="price"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
              />
              <AppFormPicker placeholder="Category" items={categories} name="category" />
              {/* <AppPicker placeholder="Category" items={categories} name="category" /> */}
              <AppFormField
                  maxLength={255}
                  placeholder="Description"
                  name="description"
                  multiline 
                  numberOfLines={3}
              />
              <SubmitButton title="Post" />
        </AppForm>
    </Screen>
  )
}

export default ListingEditScreen

const styles = StyleSheet.create({
    screen: {
        padding: 10
    }
})