import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Card = ({ title, subtitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: imageUrl}}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },  
    image: {
        width: '100%',
        height: 200
    },
    subtitle: {
        color: colors.secondary
    },
    title: {
        marginBottom: 7,
        fontWeight: 'bold'
    }
})