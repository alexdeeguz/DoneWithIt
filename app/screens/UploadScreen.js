import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import * as Progress from 'react-native-progress'
import colors from '../config/colors'
import LottieView from 'lottie-react-native'


const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
    
  return (
    <Modal visible={visible}>
          {progress < 1 ? <Progress.Bar progress={progress} color={colors.primary} width={200} /> :
              <LottieView loop={false} speed={1} autoPlay source={require('../assets/animations/done.json')} style={styles.animation} onAnimationFinish={onDone} />}
        <View style={styles.container}>
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