import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const CategoryPickerItem = ({ item, label, onPress, onSelectItem, setModalVisible }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {
        // setSelectedItem(label)
        // console.log(onSelectItem)
        onSelectItem(item)
        setModalVisible(false)
    }} style={styles.container}>
    <View>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
        <AppText>{item.label}</AppText>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        width: '33%',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    }
})