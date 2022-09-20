import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import { getListings } from '../api/listings'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

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
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log('test')
        // loadListings()
        loadListings()
    }, [])

    const loadListings = async () => {
        const response = await getListings()
        if (!response.ok) {
            return setError(true)
        }
        setListings(response.data)
        setError(false)
    }
    console.log(listings)

    // const loadListings = async () => {
    //     let res = await getListings()
    //     console.log(res.data)
    // }
  return (
    <Screen style={styles.screen}>
        {error && 
        <>
        <AppText>Couldn't retrieve listings.</AppText>
        <AppButton title="Retry" onPress={loadListings}/>
        </>}
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