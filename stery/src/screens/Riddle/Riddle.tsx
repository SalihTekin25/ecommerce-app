import React, { useEffect, useState } from 'react';
import RiddleTemplate from '../../templates/RiddleTemplate';
import { TextInput, View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import styleFn from './Riddle.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import Hint from '../../assets/icons/Hint.png';
import { useSettingContext } from '../../context/SettingContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuizInput } from 'react-native-quiz-input';

const Riddle = ({ route, navigation }: any) => {
  const styles = styleFn();
  const [answer, setAnswer]: any = useState();
  // const numbers = [1, 2, 3];
  // const rand = numbers[Math.floor(Math.random() * numbers.length)];
  const [modalVisible, setModalVisible] = useState(false);
  const [hintClaim, setHintClaim] = useState<number>(0);
  const [isHintClaim, setIsHintClaim] = useState<boolean>(false);

  const getHint = async () => {
    const hintNumber = await AsyncStorage.getItem('HINT');
    setHintClaim(parseInt(hintNumber || '3', 10));
  };

  useEffect(() => {
    getHint();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('HINT', hintClaim.toString());
  }, [hintClaim]);

  const message: any = {
    en: {
      closeModal: 'Close',
    },
    tr: {
      closeModal: 'Kapat',
    },
    de: {
      closeModal: 'Schließen',
    },
  };

  const { language, solvedLevel, setSolvedLevel }: any = useSettingContext();

  const onSolved = async () => {
    if (answer.toLowerCase() === route.params.riddleInfo.answer) {
      setSolvedLevel([...solvedLevel, route.params.riddleInfo.rIndex]);
      navigation.navigate(`RiddleSolved1`, { rIndex: route.params.riddleInfo.rIndex });
    }
  };

  const onOpenHint = async () => {
    setModalVisible(true);
    setIsHintClaim(true);
    setHintClaim(hintClaim - 1);
  };

  const solved = solvedLevel.includes(route.params.riddleInfo.rIndex);

  return (
    <>
      <RiddleTemplate title={`${route.params.chapterInfo.level} - ${route.params.chapterInfo.name}`}>
        {!isHintClaim && hintClaim > 0 && (
          <View style={styles.hintButtonView}>
            <TouchableOpacity activeOpacity={0.8} style={styles.hintButton} onPress={hintClaim > 0 ? onOpenHint : () => {}}>
              <View style={styles.hintClaimView}>
                <Text style={styles.hintClaim}>
                  {`${hintClaim}  `}
                  <Image style={styles.hint} source={Hint} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View>
              <View style={styles.modalView}>
                <View style={styles.hintView}>
                  <Text style={styles.question}>{route.params.riddleInfo.hint}</Text>
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
            </View>
          </Modal>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>{route.params.riddleInfo.questionptone}</Text>
          <Text style={styles.question}></Text>
          <Text style={styles.question}>{route.params.riddleInfo.questionpttwo}</Text>
        </View>
        {!solved ? (
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <QuizInput
                wordStructure={route.params.riddleInfo.answer.split('').map((letter: string) => (letter === ' ' ? false : true))}
                size="large"
                borderColor="#CF9C5E"
                lineBreakOnSpace
                textColor="#FFFFFF"
                onChange={(data) => setAnswer(data.wordString)}
              />
            </View>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput placeholder={route.params.riddleInfo.answer} placeholderTextColor="white" editable={false} style={styles.answerInput} />
            </View>
            <AnimatedLinearGradient
              points={{ useAngle: true, angle: 350, start: { x: 1, y: 0 }, end: { x: 0, y: 0 } }}
              style={styles.linear}
              customColors={['#F5C78B', '#CF9C5E', '#8D581E']}
              speed={2000}
            />
          </View>
        )}
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onSolved}>
          <Text style={styles.buttonText}>Check</Text>
          <View style={styles.linear}>
            <AnimatedLinearGradient
              points={{ angle: 350, start: { x: 1, y: 0 }, end: { x: 0, y: 0 } }}
              style={styles.linear}
              customColors={['#F5C78B', '#CF9C5E', '#8D581E']}
              speed={2000}
            />
          </View>
        </TouchableOpacity>
      </RiddleTemplate>
    </>
  );
};

export default Riddle;
