import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import * as ImagePicker from 'expo-image-picker'

const ImageInput = () => {
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync()
        if (!result.granted) {
            alert('You need to enable permission to access the library')
        }
    }
    
    useEffect(() => {
        requestPermission()
    }, [])

    const [imageUri, setImageUri] = useState(null)

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync()
            setImageUri(result.uri)

        } catch (error) {
            console.log('error reading image')
        }

    }

    return (
        <TouchableWithoutFeedback onPress={selectImage}>
            <View style={styles.imageInput}>
                <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    imageInput: {
        width: 100,
        height: 100,
        backgroundColor: colors.light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10
    }
})