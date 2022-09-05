import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { Swipeable } from 'react-native-gesture-handler'

const ListItem = ({ image, title, subtitle, ImageComponent, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
            <View style={styles.container}>
                {ImageComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70, 
        height: 70,
        borderRadius: 35,
        // marginRight: 10
    },
    title: {
        fontWeight: '500'
    },
    subtitle: {
        color: colors.medium
    }
})