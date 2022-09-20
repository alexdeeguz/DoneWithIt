import { FlatList, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import useApi from '../hooks/useApi'

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
    const { data: listings, loading, error, request: loadListings } = useApi(listingsApi.getListings)

    useEffect(() => {
        loadListings()
    }, [])

    // const loadListings = async () => {
    //     setLoading(true)
    //     const response = await listingsApi.getListings()
    //     setLoading(false)

    //     if (!response.ok) {
    //         return setError(true)
    //     }

    //     setListings(response.data)
    //     setError(false)
    // }
    // console.log(listings)

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
        <ActivityIndicator animating={loading} size="large"/>
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