import React, { useEffect, useState, useRef } from 'react';
import styleFn from './Home.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { Text, TouchableOpacity, View, Image, Modal, Alert, AppState } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Settings from '../../assets/icons/Settings.png';
import { useSettingContext } from '../../context/SettingContext';
import Music from '../../assets/icons/music.png';
import MusicOff from '../../assets/icons/musicoff.png';
import { music } from '../..';
import { Switch } from 'react-native-gesture-handler';

const Home = ({ navigation }: any) => {
  const styles = styleFn();
  const [modalVisible, setModalVisible] = useState(false);
  const [sound, setSound] = useState<boolean>(true);

  const toggleSwitch = () => setSound((previousState) => !previousState);

  const appState = useRef(AppState.currentState);
  const [background, setBackground] = useState(appState.current);

  useEffect(() => {
    console.log(background);
    const subscription = AppState.addEventListener("change", nextAppState => {
      appState.current = nextAppState;
      setBackground(appState.current);
    });
  });

  useEffect(() => {
    console.log(background);
  }, [background]);
  console.log(background);

  useEffect(() => {
    if (!sound || background === 'background') {
      music.pause();
    } else {
      music.play();
      music.setVolume(1);
      music.setPan(1);
      music.setNumberOfLoops(-1);
    }
  }, [sound, background]);

  const { language, setLanguage }: any = useSettingContext();

  const message: any = {
    en: {
      closeModal: 'Close',
      welcomeLabel: 'Hello and welcome to the best puzzle game solve as much as you can or until you cant anymore 😉',
      startButton: 'Lets Start to solve',
    },
    tr: {
      closeModal: 'Kapat',
      welcomeLabel: 'Merhaba, en iyi bulmaca oyununa hosgeldin çözebildigin kadar bulmaca veya çözemeyene kadar 😉',
      startButton: 'Hadi çözmeye basla',
    },
    de: {
      closeModal: 'Schließen',
      welcomeLabel: 'Hallo und willkommen beim besten Puzzlespiel, löse so viel wie du kannst oder bis du nicht mehr kannst 😉',
      startButton: 'Starte zu lösen',
    },
  };

  return (
    <View style={styles.root}>
      <View style={styles.frame}>
        <TouchableOpacity activeOpacity={0.8} style={styles.settingsButton} onPress={() => setModalVisible(true)}>
          <View style={styles.questionContainer}>
            <Image style={styles.settings} source={Settings} />
          </View>
        </TouchableOpacity>
        <View style={styles.settingsButtonView}>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalView}>
                <View style={styles.settingsContainer}>
                  <View style={styles.radioP}>
                    <View style={styles.radioView}>
                      <RadioButton
                        color="white"
                        value={language}
                        status={language === 'en' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setLanguage('en');
                        }}
                      />
                      <Text style={styles.radioText}>English</Text>
                    </View>
                    <View style={styles.radioView}>
                      <RadioButton
                        color="white"
                        value={language}
                        status={language === 'de' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setLanguage('de');
                        }}
                      />
                      <Text style={styles.radioText}>Deutsch</Text>
                    </View>
                    <View style={styles.radioView}>
                      <RadioButton
                        color="white"
                        value={language}
                        status={language === 'tr' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setLanguage('tr');
                        }}
                      />
                      <Text style={styles.radioText}>Türkçe</Text>
                    </View>
                  </View>
                  <View style={styles.musicSettingsContainer}>
                    {sound && (
                      <View style={styles.musicView}>
                        <Image source={Music} style={styles.musicIcon} />
                      </View>
                    )}
                    {!sound && (
                      <View style={styles.musicView}>
                        <Image source={MusicOff} style={styles.musicIcon} />
                      </View>
                    )}
                    <Switch
                      style={styles.switchStyle}
                      trackColor={{ true: '#005899', false: '#767577' }}
                      thumbColor={sound ? '#f4f3f4' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={sound}
                    />
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.modalbuttonText}>{message[language].closeModal}</Text>
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
            </Modal>
          </View>
        </View>
        <View style={styles.subFrame}>
          <Text style={styles.onSolvedLabel}>{message[language].welcomeLabel}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => {
              navigation.navigate('Levels');
            }}
          >
            <Text style={styles.buttonText}>{message[language].startButton}</Text>
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

export default Home;
