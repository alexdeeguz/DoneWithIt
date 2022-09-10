import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    const scrollView = useRef()

  return (
    <View>
        <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
            <View style={styles.container}>
            {imageUris.map(uri => <ImageInput key={uri} imageUri={uri} onChangeImage={(uri) => onRemoveImage(uri)} />)}
            <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
            </View>
        </ScrollView>
    </View>
  )
}

export default ImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})