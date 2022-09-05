import { FlatList, StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'


const MessagesScreen = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            title: 't1',
            description: 'd1',
            image: require('../assets/mosh.jpg')
        },
        {
            id: 2,
            title: 't2',
            description: 'd2',
            image: require('../assets/mosh.jpg')
        },
    ])

    const handleDelete = (item) => {
        let newMessages = messages.filter(message => message.id !== item.id)
        setMessages(newMessages)
    }
  return (
    <Screen>
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => <ListItem 
                title={item.title} 
                subtitle={item.description} 
                image={item.image}
                onPress={() => console.log('message selected')} 
                renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />} 
            />}
            ItemSeparatorComponent={() => <ListItemSeparator />}
        />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
    // screen: {
    //     paddingTop: Constants.statusBarHeight
    // }
})