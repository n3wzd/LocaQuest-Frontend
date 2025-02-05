import { Accelerometer, AccelerometerMeasurement } from 'expo-sensors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STEP_COUNTER_KEY = "step-couter";
const ACC_THRESHOLD_MIN = 1.5;
const ACC_THRESHOLD_MAX = 2.5;
const MIN_TIME_BETWEEN_STEPS = 300;

let stepSubscription = null;
let step = 0;
let lastStepTime = Date.now();

const startStepCounter = async () => {
  step = Number(await AsyncStorage.getItem(STEP_COUNTER_KEY)) ?? 0;
  const detectSteps = (data: AccelerometerMeasurement) => {
    const { x, y, z } = data;
    const accelerationMagnitude = Math.sqrt(x * x + y * y + z * z);

    if (accelerationMagnitude > ACC_THRESHOLD_MIN && accelerationMagnitude < ACC_THRESHOLD_MAX && Date.now() - lastStepTime > MIN_TIME_BETWEEN_STEPS) {
      step++;
      AsyncStorage.setItem(STEP_COUNTER_KEY, JSON.stringify(step));
      lastStepTime = Date.now();
    }
  };

  stepSubscription = Accelerometer.addListener((data) => {
    detectSteps(data);
  });
};

export { startStepCounter, step };
