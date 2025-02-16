import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
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

/* ============ Background Task =============
const DISTANCE_COUNTER_KEY = "distance-couter";
const LOCATION_TASK_NAME = "background-location-task";

TaskManager.defineTask(LOCATION_TASK_NAME, async (taskData) => {
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
};
*/

///////////// TEST: Foreground TASK ///////////////
let locationSubscription: Location.LocationSubscription | null = null;

const startBackgroundLocation = async () => {
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
//////////////////////////////////

export { startBackgroundLocation, location, getDistance, setDistance };
