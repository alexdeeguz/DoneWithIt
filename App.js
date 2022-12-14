import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image, AsyncStorage } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import colors from './app/config/colors';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import AppFormPicker from './app/components/forms/AppFormPicker';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme'
import TabNavigator from './app/navigation/TabNavigator';
import NetInfo from '@react-native-community/netinfo'

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
]

// const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

export default function App() {
  NetInfo.addEventListener(res => console.log(res))

  const demo = async () => {
    await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }))
    const res = await AsyncStorage.getItem('person')
    console.log(res)
  } 
  demo()
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <ListingDetailsScreen />
    // <AccountScreen />
    // <ListingsScreen />
    // <Screen>
    //   {/* <AppTextInput placeholder="First Name" icon="email"/> */}
    //   <AppPicker icon="apps" placeholder="Category" items={categories}/>
    // </Screen>
    // <LoginScreen />
    // <RegisterScreen />
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // imageInput: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: colors.light,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   marginLeft: 10
  // }
});
