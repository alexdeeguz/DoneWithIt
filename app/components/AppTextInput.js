import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
        <TextInput placeholderTextColor={colors.medium} style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
})