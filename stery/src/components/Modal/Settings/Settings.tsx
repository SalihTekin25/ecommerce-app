import React, { useRef, useState, forwardRef, useImperativeHandle, createRef } from 'react';
import styleFn from './Settings.styles';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { Text, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useSettingContext } from '../../../context/SettingContext';

const SettingsRoot = forwardRef(({ ref }: any) => {
  const styles = styleFn();
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState('first');

  const { language, setLanguage }: any = useSettingContext();

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

  return (
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
        <View>
          <View style={styles.modalView}>
            <View>
              <View style={styles.radioView}>
                <RadioButton
                  color="white"
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('first');
                    setLanguage('en');
                  }}
                />
                <Text style={styles.radioText}>English</Text>
              </View>
              <View style={styles.radioView}>
                <RadioButton
                  color="white"
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('second');
                    setLanguage('de');
                  }}
                />
                <Text style={styles.radioText}>Deutsch</Text>
              </View>
              <View style={styles.radioView}>
                <RadioButton
                  color="white"
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('third');
                    setLanguage('tr');
                  }}
                />
                <Text style={styles.radioText}>Türkçe</Text>
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
        </View>
      </Modal>
    </View>
  );
});

const settingsRootRef = createRef(null);

const Settings = () => {
  return <SettingsRoot ref={settingsRootRef} />;
};

export default Settings;
