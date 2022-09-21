import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({ 
    icon, 
    placeholder, 
    items, 
    selectedItem, 
    onSelectItem,
    numColumns = 1,
    PickerItemComponent = PickerItem
}) => {
    const [modalVisible, setModalVisible] = useState(false)
    // const [selectedItem, setSelectedItem] = useState(null)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
                    {selectedItem ? 
                    <AppText style={styles.text}>{selectedItem.label}</AppText> 
                    : 
                    <AppText style={{ flex: 1, color: colors.medium }}>{placeholder}</AppText>}
                    {/* <AppText style={styles.text}>{selectedItem ? selectedItem : placeholder}</AppText> */}
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title='close' onPress={() => setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numColumns}
                        renderItem={({ item }) => <PickerItemComponent item={item} label={item.label} setModalVisible={setModalVisible} onSelectItem={onSelectItem} />}
                    />
                </Screen>
            </Modal>
        </>
    )
}

export default AppPicker

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
    text: {
        flex: 1
    }
})