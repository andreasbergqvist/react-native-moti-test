import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedView = ({counter}: {counter: number}) => {
  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value + (counter - counter),
    };
  });
  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, {duration: 3000}), 999, true);
  }, [opacity]);

  return <Animated.View style={[styles.motiTest, animatedStyles]} />;
};

const styles = StyleSheet.create({
  motiTest: {
    opacity: 0,
    height: 100,
    width: 200,
    backgroundColor: '#ff00ff',
  },
});

export default ReanimatedView;
