import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color="white" size={30}/>
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
        </View>
        <Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')}/>
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 40
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 40
    },
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    image: {
        width: '100%',
        height: '100%',
    }
})