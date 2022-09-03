import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import colors from './app/config/colors';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
    // <View style={{
    //   padding: 20,
    //   paddingTop: 100,
    //   backgroundColor: colors.lightgray
    // }}>
    //   <Card title="Red jacket for sale" subtitle="$100" image={require("./app/assets/jacket.jpg")}/>
    // </View>
    // <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
