import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch for sale',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]
const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Card title={item.title} subtitle={`$${item.price}`} image={item.image}/>}
        />
    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        padding: 20
    }
})