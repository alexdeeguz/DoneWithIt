import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import AppForm from '../components/forms/AppForm'
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField'
import AppPicker from '../components/AppPicker'
import SubmitButton from '../components/forms/SubmitButton'
import { ErrorMessage } from 'formik'
import AppFormPicker from '../components/forms/AppFormPicker'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/forms/FormImagePicker'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().label('Title'),
    price: Yup.string().required().min(1).max(10000).label('Price'),
    category: Yup.string('Category is required').required('Category is required'),
    description: Yup.string().required(),
    images: Yup.array().min(1, "Please select at least one image")
})

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
    { label: 'Cameras', value: 3, backgroundColor: 'blue', icon: 'lock' },
    { label: 'something', value: 4, backgroundColor: 'blue', icon: 'lock' },
    { label: 'another thing', value: 5, backgroundColor: 'blue', icon: 'lock' },
    { label: 'adfaf', value: 6, backgroundColor: 'blue', icon: 'lock' },
]

const ListingEditScreen = () => {
 const location = useLocation()
  return (
    <Screen style={styles.screen}>
        <AppForm 
            initialValues={{ 
                title: '',
                price: '',
                description: '',
                category: '',
                images: []
            }}
            onSubmit={values => console.log(location)}
            validationSchema={validationSchema}
        >
              <FormImagePicker name="images" />
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
              <AppFormPicker 
              placeholder="Category" 
              items={categories} 
              name="category" 
            //   PickerItemComponent={CategoryPickerItem} 
            //   numColumns={3} 
              />
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