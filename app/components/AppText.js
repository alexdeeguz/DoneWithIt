import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const AppText = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        // color: 'tomato',
        ...Platform.select({
            ios: {
                fontSize: 18,
                // fontFamily: 'roboto'   
            },
            android: {
                fontSize: 20,
                // fontFamily: 'Avenir'
            }
        })
    }
})