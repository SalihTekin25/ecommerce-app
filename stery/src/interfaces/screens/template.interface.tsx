import { StyleProp, TextStyle, ViewStyle, ImageStyle } from 'react-native';

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
  hintButtonView: StyleProp<ViewStyle> | undefined;
  hint: StyleProp<ImageStyle> | undefined;
  hintButton: StyleProp<ViewStyle> | undefined;
  modalText: StyleProp<TextStyle> | undefined;
  modalbuttonText: StyleProp<TextStyle> | undefined;
  modalView: StyleProp<ViewStyle> | undefined;
  modalButton: StyleProp<ViewStyle> | undefined;
}
