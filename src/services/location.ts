import * as Location from 'expo-location';
import { calculateDistance } from '../utils/location';

let location: Location.LocationObject | null = null;
let distance = 0;

const updateLocation = (newLocation: Location.LocationObject) => {
  distance += calculateDistance(location ?? newLocation, newLocation);
  location = newLocation;
}

const getDistance = () => {
  return distance
}

const setDistance = (dist: number) => {
  distance = dist;
}

let locationSubscription: Location.LocationSubscription | null = null;

const startLocationSearch = async () => {
  distance = 0;
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return false;
  }

  locationSubscription = await Location.watchPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
      timeInterval: 5000,
      distanceInterval: 5,
    }, (data) => {
      if (data.coords.accuracy && data.coords.accuracy < 50) {
        updateLocation(data);
        return;
      }
    }
  );
  return true;
};

export { startLocationSearch, location, getDistance, setDistance };
