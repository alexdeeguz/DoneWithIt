import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import AppText from './AppText'

const CategoryPickerItem = ({ item, label, onPress }) => {
  return (
    <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
        <AppText>{item.label}</AppText>
    </View>
  )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        width: '33%',
        alignItems: 'center'
    }
})