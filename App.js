import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import colors from './app/config/colors';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <ListingDetailsScreen />
    <Screen>
      {/* <Icon 
        name="email"
        size={50}
        color="red"
        iconColor="white"
      /> */}
      <ListItem 
        title="my title" 
        // subtitle="my subtitle" 
        ImageComponent={
          <Icon 
          name="email"/>
      }/>
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
