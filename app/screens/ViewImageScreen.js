import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
          <View style={styles.deleteIcon}></View>
      <Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')}/>
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: '#fc5c65',
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        left: 40
    },
    deleteIcon: {
        backgroundColor: '#43cdc4',
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        right: 40
    },
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    image: {
        width: '100%',
        height: '100%',
    }
})