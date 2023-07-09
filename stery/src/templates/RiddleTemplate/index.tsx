import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styleFn from './RiddleTemplate.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import Icon from '../../components/elements/Icon';
import colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

const RiddleTemplate = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const styles = styleFn();
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.frame}>
        <View style={styles.subFrame}>
          <TouchableOpacity style={styles.riddleInfo} onPress={() => navigation.goBack()}>
            <Icon name="ChevronBackOutline" width={25} height={25} color={colors.white.default} />
            <Text style={styles.riddleInfoText}>{title}</Text>
          </TouchableOpacity>
          {children}
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

export default RiddleTemplate;
