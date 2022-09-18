import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native'

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={30} />
        </View>
    </TouchableWithoutFeedback>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 40,
        height: 80,
        width: 80,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})