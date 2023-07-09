import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styleFn from './Levels.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { riddles } from '../../constants/riddles';
import Riddle from '../Riddle/Riddle';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '../../components/elements/Icon';
import colors from '../../theme/colors';
import { SettingContextProvider, useSettingContext } from '../../context/SettingContext';
import Tick from '../../assets/icons/Tick.png';
import Lock from '../../assets/icons/lock.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Levels = ({ navigation }: any) => {
  const styles = styleFn();

  const { language, solvedLevel }: any = useSettingContext();

  useEffect(() => {
    AsyncStorage.setItem('LEVELS', JSON.stringify(solvedLevel));
  }, [solvedLevel]);

  return (
    <SettingContextProvider>
      <View style={styles.root}>
        <View style={styles.frame}>
          <View style={styles.subFrame}>
            <ScrollView>
              <TouchableOpacity style={styles.riddleInfo} onPress={() => navigation.navigate('First-Screen')}>
                <Icon name="ChevronBackOutline" width={25} height={25} color={colors.white.default} />
                <Text style={styles.riddleInfoText}>Levels</Text>
              </TouchableOpacity>
              {riddles[language].map((chapter: any, chapterIndex: number) => {
                return (
                  <View style={styles.chapter}>
                    <Text style={styles.levels}>{`${chapter.level} - ${chapter.name}`}</Text>
                    <View style={styles.levelRow}>
                      {chapter.riddles.map((riddle: any, levelIndex: number) => {
                        const solved: boolean = solvedLevel.includes(riddle.rIndex);
                        // const lastItem = solvedLevel[solvedLevel.length - 1];
                        console.log('solvedLevel', solvedLevel, riddle, riddle.rIndex);

                        const locked: boolean = !solvedLevel.includes(riddle.rIndex - 1) && riddle.rIndex !== 1;
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}
                            disabled={locked}
                            onPress={() => navigation.navigate('Riddle', { riddle: Riddle, riddleInfo: riddle, chapterInfo: chapter, chapterIndex, levelIndex })}
                          >
                            {solvedLevel.includes(riddle.rIndex) === true && (
                              <View style={styles.tickBox}>
                                <Image style={styles.tick} source={Tick} />
                                <Text style={styles.tickText}>{levelIndex + 1}</Text>
                              </View>
                            )}
                            {solvedLevel.includes(riddle.rIndex) === false && (
                              <>
                                {!locked ? (
                                  <Text style={styles.buttonText}>{levelIndex + 1}</Text>
                                ) : (
                                  <View style={styles.tickBox}>
                                    <Image style={styles.lock} source={Lock} />
                                    <Text style={styles.tickText}>10</Text>
                                    <Text style={styles.lockedText}>{levelIndex + 1}</Text>
                                  </View>
                                )}
                              </>
                            )}
                            <View style={styles.linear}>
                              <AnimatedLinearGradient
                                points={{ angle: 350, start: { x: 1, y: 0 }, end: { x: 0, y: 0 } }}
                                style={styles.linear}
                                customColors={['#F5C78B', '#CF9C5E', '#8D581E']}
                                speed={2000}
                              />
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <AnimatedLinearGradient
            points={{ useAngle: true, angle: 350, start: { x: 1, y: 0 }, end: { x: 0, y: 0 } }}
            style={styles.linear}
            customColors={['#F5C78B', '#CF9C5E', '#8D581E']}
            speed={2000}
          />
        </View>
      </View>
    </SettingContextProvider>
  );
};

export default Levels;

//() => navigation.navigate('Riddle', { riddle: Riddle, riddleInfo: riddle, chapterInfo: chapter })
