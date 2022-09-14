import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

const ListingDetailsScreen = ({ route }) => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{route.params.title}</AppText>
            <AppText style={styles.price}>${route.params.price}</AppText>
            <View style={styles.userContainer}>
                <ListItem 
                    image={require("../assets/mosh.jpg")}
                    title="Alex De Guzman"
                    subtitle="5 Listings"
                />
            </View>
        </View>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})