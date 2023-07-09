import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface LevelsStyleProps {
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
  levels: StyleProp<TextStyle> | undefined;
  levelRow: StyleProp<ViewStyle> | undefined;
  chapter: StyleProp<ViewStyle> | undefined;
  headerlabel: StyleProp<TextStyle> | undefined;
  tick: StyleProp<ImageStyle> | undefined;
  tickText: StyleProp<TextStyle> | undefined;
  tickBox: StyleProp<ViewStyle> | undefined;
  lockedText: StyleProp<TextStyle> | undefined;
  lock: StyleProp<ImageStyle> | undefined;
}
