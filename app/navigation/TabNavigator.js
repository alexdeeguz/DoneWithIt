import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Listings" component={FeedNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
)

export default TabNavigator