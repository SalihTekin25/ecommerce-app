import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface StartStyleProps {
  root: StyleProp<ViewStyle> | undefined;
  frame: StyleProp<ViewStyle> | undefined;
  subFrame: StyleProp<ViewStyle> | undefined;
  startLabel: StyleProp<TextStyle> | undefined;
  linear: StyleProp<ViewStyle> | undefined;
}
