import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import * as Progress from 'react-native-progress'
import colors from '../config/colors'

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
            <Progress.Bar progress={progress} color={colors.primary} width={200} />
        </View>
    </Modal>
  )
}

export default UploadScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})