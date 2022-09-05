import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Icon = ({ name, size = 40, backgroundColor = "black", iconColor = "white" }) => {
  return (
    <View style={[styles.iconContainer, { width: size, height: size, borderRadius: size / 2, backgroundColor }]}>
        <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})