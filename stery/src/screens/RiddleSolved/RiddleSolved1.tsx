import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { riddles } from '../../constants/riddles';
import styleFn from './RiddleSolved.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { useSettingContext } from '../../context/SettingContext';

const RiddleSolved1 = ({ route, navigation }: any) => {
  const styles = styleFn();

  const message: any = {
    en: {
      solvedLabel: 'Congratulations you solved the riddle press the Button for the next riddle',
      nextButton: 'Next Riddle',
    },
    tr: {
      solvedLabel: 'Tebrikler Bulmacayi cözdün, digerine gecmek icin buttona bas',
      nextButton: 'Siradaki Bulmaca',
    },
    de: {
      solvedLabel: 'Herzlichen Glückwunsch, Sie haben das Rätsel gelöst. Drücken Sie die Taste für das nächste ',
      nextButton: 'Nächstes Rätsel',
    },
  };

  const { language }: any = useSettingContext();

  const findNextRiddle = () => {
    let riddleInfo;
    riddles[language].map((chapter: any) => {
      chapter.riddles.map((riddle: any) => {
        if (riddle.rIndex === route.params.rIndex + 1) riddleInfo = riddle;
        else false;
      });
    });
    return riddleInfo;
  };

  const findNextChapter = () => {
    let chapterInfo;
    riddles[language].map((chapter: any) => {
      chapter.riddles.map((riddle: any) => {
        if (riddle.rIndex === route.params.rIndex + 1) chapterInfo = chapter;
        else false;
      });
    });
    return chapterInfo;
  };

  return (
    <View style={styles.root}>
      <View style={styles.frame}>
        <View style={styles.subFrame}>
          <Text style={styles.onSolvedLabel}>{message[language].solvedLabel}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('Riddle', {
                riddleInfo: findNextRiddle(),
                chapterInfo: findNextChapter(),
              })
            }
          >
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

export default RiddleSolved1;
