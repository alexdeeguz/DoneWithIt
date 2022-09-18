import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import { getListings } from '../api/listings'

// const listings = [
//     {
//         id: 1,
//         title: 'Red jacket for sale',
//         price: 100,
//         image: require('../assets/jacket.jpg')
//     },
//     {
//         id: 2,
//         title: 'Couch for sale',
//         price: 1000,
//         image: require('../assets/couch.jpg')
//     }
// ]
const ListingsScreen = ({ navigation }) => {
    const [listings, setListings] = useState([])
    useEffect(() => {
        console.log('test')
        // loadListings()
        getListings().then(res => setListings(res.data))
    }, [])
    console.log(listings)

    // const loadListings = async () => {
    //     let res = await getListings()
    //     console.log(res.data)
    // }
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Card title={item.title} subtitle={`$${item.price}`} imageUrl={item.images[0].url} onPress={() => navigation.push('ListingDetails', item)}/>}
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