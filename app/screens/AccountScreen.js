import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import colors from '../config/colors'
import { FlatList } from 'react-native-gesture-handler'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
        screen: 'Listings'
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
        screen: 'Messages'
    }
]

const AccountScreen = ({ navigation }) => {
  return (
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title="Alex De Guzman"
            subtitle="alexdg316@gmail.com"
            image={require('../assets/mosh.jpg')}   
          />
        </View>

        <View style={styles.container}>
            <FlatList 
                data={menuItems}
                keyExtractor={item => item.title}
                renderItem={({item}) => 
                (<ListItem 
                    title={item.title} 
                    ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} 
                    onPress={() => navigation.navigate(item.screen)}
                />)
                }
                ItemSeparatorComponent={ListItemSeparator}
            />
          </View>
        <ListItem 
            title="Logout"
            ImageComponent={<Icon name="logout" />}
        />
      </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})