import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
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