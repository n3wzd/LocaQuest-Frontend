import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DISTANCE_COUNTER_KEY = "distance-couter";
const LOCATION_TASK_NAME = "background-location-task";

let location: Location.LocationObject | null = null;
let distance = 0;

const updateLocation = (newLocation: Location.LocationObject) => {
    distance += calculateDistance(location ?? newLocation, newLocation);
    AsyncStorage.setItem(DISTANCE_COUNTER_KEY, JSON.stringify(distance));
    location = newLocation;
}

const getLocation = () => location;

/*TaskManager.defineTask(LOCATION_TASK_NAME, async (taskData) => {
    const { data, error } = taskData as TaskManager.TaskManagerTaskBody<{locations: Location.LocationObject[];}>;
    if (error) {
      console.error("위치 업데이트 오류:", error);
      return;
    }
    for(const location of data.locations) {
        updateLocation(location);
    }
});

const startBackgroundLocation = async () => {
    const { status } = await Location.requestBackgroundPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
        return false;
    }
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Lowest,
      timeInterval: 5000,
      distanceInterval: 10,
      deferredUpdatesInterval: 60000,
    });
    return true;
};*/

///////////// TEST ///////////////
let locationSubscription: Location.LocationSubscription | null = null;

const startBackgroundLocation = async () => {
  distance = Number(await AsyncStorage.getItem(DISTANCE_COUNTER_KEY)) ?? 0;
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return false;
  }

  locationSubscription = await Location.watchPositionAsync({
      accuracy: Location.Accuracy.High,
      timeInterval: 5000,
      distanceInterval: 1,
    }, (data) => {
        updateLocation(data);
    }
  );
  return true;
};
//////////////////////////////////

const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371;
  const p1 = lat1 * (Math.PI / 180);
  const p2 = lat2 * (Math.PI / 180);
  const dp = (lat2 - lat1) * (Math.PI / 180);
  const dq = (lon2 - lon1) * (Math.PI / 180);

  const a = Math.sin(dp / 2) * Math.sin(dp / 2) +
            Math.cos(p1) * Math.cos(p2) *
            Math.sin(dq / 2) * Math.sin(dq / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c * 1000;
  return distance;
};

const calculateDistance = (prevLocation: Location.LocationObject, currentLocation: Location.LocationObject) => {
  if (prevLocation && currentLocation) {
    const { latitude: lat1, longitude: lon1 } = prevLocation.coords;
    const { latitude: lat2, longitude: lon2 } = currentLocation.coords;
    const distance = haversineDistance(lat1, lon1, lat2, lon2);
    return distance;
  }
  return 0;
};

export { startBackgroundLocation, location };
