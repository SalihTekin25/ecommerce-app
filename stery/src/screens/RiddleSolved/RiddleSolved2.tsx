import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styleFn from '../Riddle/Riddle.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { useSettingContext } from '../../context/SettingContext';

const RiddleSolved2 = ({ navigation }: any) => {
  const styles = styleFn();

  const message: any = {
    en: {
      solvedLabel: 'You are pretty smart! But how smart are you really? Show us',
      nextButton: 'Next Riddle',
    },
    tr: {
      solvedLabel: 'Oldukça akıllısın! Ama gerçekten ne kadar akıllısın? Göster bize ',
      nextButton: 'Siradaki Bulmaca',
    },
    de: {
      solvedLabel: 'Du bist ziemlich schlau! Aber wie schlau bist du wirklich? Zeig es uns',
      nextButton: 'Nächstes Rätsel',
    },
  };

  const { language }: any = useSettingContext();

  return (
    <View style={styles.root}>
      <View style={styles.frame}>
        <View style={styles.subFrame}>
          <Text style={styles.onSolvedLabel}>{message[language].solvedLabel}</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Levels')}>
            <Text style={styles.buttonText}>{message[language].nextButton}</Text>
            <View style={styles.linear}>
              <AnimatedLinearGradient
                points={{ angle: 350, start: { x: 1, y: 0 }, end: { x: 0, y: 0 } }}
                style={styles.linear}
                customColors={['#F5C78B', '#CF9C5E', '#8D581E']}
                speed={2000}
              />
            </View>
          </TouchableOpacity>
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

export default RiddleSolved2;
