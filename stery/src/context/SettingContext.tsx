import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

export const SettingContext = createContext({});

export const SettingContextProvider = ({ children }: any) => {
  const [language, setLanguage] = useState<string>('en');
  const [solvedLevel, setSolvedLevel] = useState<number[]>([0]);

  const getLevels = async () => {
    const levels = JSON.parse((await AsyncStorage.getItem('LEVELS')) || '[]');
    setSolvedLevel(levels || [0]);
  };

  const getLang = async () => {
    const lang = await AsyncStorage.getItem('LANG');
    setLanguage(lang || 'en');
  };

  useEffect(() => {
    getLang();
    getLevels();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('LANG', language);
  }, [language]);

  const values: { language: string; setLanguage: any; solvedLevel: any; setSolvedLevel: any } = {
    language,
    setLanguage,
    solvedLevel,
    setSolvedLevel,
  };
  return <SettingContext.Provider value={values}>{children}</SettingContext.Provider>;
};

export const useSettingContext = () => useContext(SettingContext);
