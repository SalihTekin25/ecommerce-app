import React from 'react';
import { I18nManager } from 'react-native';
import { SvgProps, SvgXml } from 'react-native-svg';
//  Local Icons
import colors from './colors';
import ChevronBackOutline from '../assets/icons/chevron-back-outline.svg';

const icons: { [key: string]: React.FC<SvgProps> } = {
  ChevronBackOutline,
};

const nonFlip: { [key: string]: string } = {};

interface IconProps {
  name: string;
  color: string;
  width?: string | number;
  height?: string | number;
}

const icon = ({ name, color, width = '25', height = '25', ...props }: IconProps) => {
  let colorValue = color;

  if (colorValue === undefined) {
    colorValue = colors.quickSilver;
  }

  const allIcons = { ...icons };

  const Icon = allIcons[name];
  return (
    <SvgXml
      width={width}
      height={height}
      xml={Icon.toString()}
      color={color}
      style={{ transform: [{ scaleX: nonFlip[name] === undefined && I18nManager.isRTL ? -1 : 1 }] }}
      {...props}
    />
  );
};

export default icon;
