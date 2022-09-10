import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import * as ImagePicker from 'expo-image-picker'

const ImageInput = ({ imageUri, onChangeImage }) => {
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync()
        if (!result.granted) {
            alert('You need to enable permission to access the library')
        }
    }

    useEffect(() => {
        requestPermission()
    }, [])

    const selectImage = async () => {
        try {
            if (!imageUri) {
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.5
                })
                onChangeImage(result.uri)
            } else {
                Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                    { text: 'Yes', onPress: () => onChangeImage(imageUri) },
                    { text: 'No' }
                ])
            }
        } catch (error) {
            console.log('error reading image')
        }

    }

    return (
        <TouchableWithoutFeedback onPress={selectImage}>
            <View style={styles.imageInput}>
                {!imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />}
                {imageUri && <Image style={styles.image} source={{ uri: imageUri }}/>}
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
        marginLeft: 10,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%'
    }
})