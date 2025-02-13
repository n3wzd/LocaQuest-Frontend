import { Accelerometer, AccelerometerMeasurement } from 'expo-sensors';
import socket from './socket';

const ACC_THRESHOLD_MIN = 1.5;
const ACC_THRESHOLD_MAX = 2.5;
const MIN_TIME_BETWEEN_STEPS = 300;

let stepSubscription = null;
let lastStepTime = Date.now();

const startStepCounter = async () => {
  const detectSteps = (data: AccelerometerMeasurement) => {
    const { x, y, z } = data;
    const accelerationMagnitude = Math.sqrt(x * x + y * y + z * z);

    if (accelerationMagnitude > ACC_THRESHOLD_MIN && accelerationMagnitude < ACC_THRESHOLD_MAX && Date.now() - lastStepTime > MIN_TIME_BETWEEN_STEPS) {
      socket.send();
      lastStepTime = Date.now();
    }
  };

  stepSubscription = Accelerometer.addListener((data) => {
    detectSteps(data);
  });
};

export { startStepCounter };
