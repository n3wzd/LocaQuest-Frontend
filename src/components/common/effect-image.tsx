import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import ASSET from '@/src/config/asset';
import RoundImage from './round-image';

const RotatingOverlayImage = ({ uri, radius, onPress }: { uri: string, radius: number, onPress?: () => void }) => {
  const [ rotation, setRotation ] = useState<number>(0);
  const rotationAnimation = new Animated.Value(0);
  const glowRadius = radius * 1.5;

  useEffect(() => {
    const listenerId = rotationAnimation.addListener((item) => {
      setRotation(item.value);
    });
    Animated.loop(
      Animated.timing(rotationAnimation, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
    return () => rotationAnimation.removeListener(listenerId);
  }, []);

  return (
    <View style={[styles.container, { width: glowRadius, height: glowRadius }]}>
      <Image
        source={{ uri: ASSET.effect.glow }}
        style={[
          styles.glowImage,
          { width: glowRadius, height: glowRadius, transform: [{ rotate: `${rotation * 360}deg` }] },
        ]}
      />
      <RoundImage uri={uri} radius={radius} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default RotatingOverlayImage;
