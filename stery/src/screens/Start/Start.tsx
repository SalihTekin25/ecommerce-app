import React from 'react';
import { Text, View } from 'react-native';
import styleS from './Start.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import SplashScreen from 'react-native-splash-screen';

const Start = ({ navigation }: any) => {
  const styles = styleS();
  SplashScreen.hide();
  setTimeout(() => {
    navigation.replace('First-Screen');
  }, 2000);

  return (
    <View style={styles.root}>
      <View style={styles.frame}>
        <View style={styles.subFrame}>
          <Text style={styles.startLabel}>Stery</Text>
        </View>
        <AnimatedLinearGradient
          points={{ useAngle: true, angle: 350, start: { x: 1, y: 0 }, end: { x: 0, y: 0 } }}
          style={styles.linear}
          customColors={['#F5C78B', '#CF9C5E', '#8D581E']}
          speed={2000}
        />
      </View>
    </View>
  );
};

export default Start;
