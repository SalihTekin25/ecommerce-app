import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface RiddleStyleProps {
  root: StyleProp<ViewStyle> | undefined;
  frame: StyleProp<ViewStyle> | undefined;
  subFrame: StyleProp<ViewStyle> | undefined;
  riddleInfo: StyleProp<ViewStyle> | undefined;
  riddleInfoText: StyleProp<TextStyle> | undefined;
  questionContainer: StyleProp<TextStyle> | undefined;
  question: StyleProp<TextStyle> | undefined;
  answerInput: StyleProp<TextStyle> | undefined;
  button: StyleProp<ViewStyle> | undefined;
  buttonText: StyleProp<TextStyle> | undefined;
  linear: StyleProp<ViewStyle> | undefined;
  inputContainer: StyleProp<ViewStyle> | undefined;
  inputSubContainer: StyleProp<ViewStyle> | undefined;
  onSolvedLabel: StyleProp<TextStyle> | undefined;
  settingsButtonView: StyleProp<ViewStyle> | undefined;
  settingsButton: StyleProp<ViewStyle> | undefined;
  settings: StyleProp<ImageStyle> | undefined;
  centeredView: StyleProp<ViewStyle> | undefined;
  modalView: StyleProp<ViewStyle> | undefined;
  modalButton: StyleProp<ViewStyle> | undefined;
  buttonOpen: StyleProp<ViewStyle> | undefined;
  buttonClose: StyleProp<ViewStyle> | undefined;
  textStyle: StyleProp<TextStyle> | undefined;
  modalText: StyleProp<TextStyle> | undefined;
  modalbuttonText: StyleProp<TextStyle> | undefined;
  radioView: StyleProp<ViewStyle> | undefined;
  radioText: StyleProp<TextStyle> | undefined;
  musicIcon: StyleProp<ImageStyle> | undefined;
  musicView: StyleProp<ViewStyle> | undefined;
  musicSettingsContainer: StyleProp<ViewStyle> | undefined;
  switchStyle: StyleProp<ViewStyle> | undefined;
  radioP: StyleProp<ViewStyle> | undefined;
  settingsContainer: StyleProp<ViewStyle> | undefined;
}
