import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from "react-native-maps";
import { location } from "../../utils/location-manager";

const MapScreen = () => {
    const [ loc, setLoc ] = useState<Location.LocationObject | null>(null);
    const lat = loc?.coords.latitude ?? 0;
    const lng = loc?.coords.longitude ?? 0;
    
    useEffect(() => {
        const interval = setInterval(() => {
            setLoc(location);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        loc && (
            <View style={{ flex: 1 }} >
                <MapView 
                style={{ flex: 1 }} 
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                >
                    <Marker coordinate={{ latitude: lat, longitude: lng }} title="내 위치" />
                </MapView>
            </View>
        )
    )
  };

export default MapScreen;
