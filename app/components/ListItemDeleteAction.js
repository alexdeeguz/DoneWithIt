import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteAction}>
        <MaterialCommunityIcons name='trash-can' size={35} color={colors.white}/>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
    deleteAction: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})