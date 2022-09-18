import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Listings" 
            component={FeedNavigator} 
            options={{ 
                headerShown: false, 
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/> 
            }}/>
        <Tab.Screen 
            name="ListingEdit" 
            component={ListingEditScreen} 
            options={({ navigation }) => ({ 
                headerShown: false,
                tabBarButton:() =>  <NewListingButton onPress={() => navigation.navigate('ListingEdit')}/>
            })}/>
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator} 
            options={{ 
                headerShown: false,
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} /> 
            }}
        />
    </Tab.Navigator>
)

export default TabNavigator