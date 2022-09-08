import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'

const PickerItem = ({ label, setModalVisible, onSelectItem, item }) => {
  return (
    <TouchableOpacity onPress={() => {
        // setSelectedItem(label)
        // console.log(onSelectItem)
        onSelectItem(item.label)
        setModalVisible(false)
    }}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})