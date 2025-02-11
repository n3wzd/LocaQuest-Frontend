import * as Location from 'expo-location';

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
  
export const calculateDistance = (prevLocation: Location.LocationObject, currentLocation: Location.LocationObject) => {
    if (prevLocation && currentLocation) {
      const { latitude: lat1, longitude: lon1 } = prevLocation.coords;
      const { latitude: lat2, longitude: lon2 } = currentLocation.coords;
      const distance = haversineDistance(lat1, lon1, lat2, lon2);
      return distance;
    }
    return 0;
};
