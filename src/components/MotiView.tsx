import {View} from 'moti';
import React from 'react';
import {StyleSheet} from 'react-native';

const animate = {opacity: 1};

const MotiView = () => {
  return (
    <View
      style={styles.motiTest}
      from={{opacity: 0}}
      animate={animate}
      transition={{type: 'timing', duration: 3000, loop: true}}
    />
  );
};

const styles = StyleSheet.create({
  motiTest: {
    height: 100,
    width: 200,
    backgroundColor: '#ff00ff',
  },
});

export default MotiView;
