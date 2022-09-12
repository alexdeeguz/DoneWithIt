import { useEffect, useState } from "react"
import * as Location from 'expo-location'

export default useLocation = () => {
    const [location, setLocation] = useState()
    const getLocation = async () => {
        try {
            const { granted } = await Location.requestBackgroundPermissionsAsync()
            if (!granted) return

            const result = await Location.getCurrentPositionAsync()
            const { coords: { latitude, longitude } } = result

            setLocation({ latitude, longitude })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getLocation()
    }, [])

    return location 
}