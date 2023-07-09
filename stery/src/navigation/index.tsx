import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/Start/Start';
import RiddleSolved1 from '../screens/RiddleSolved/RiddleSolved1';
import RiddleSolved2 from '../screens/RiddleSolved/RiddleSolved2';
import RiddleSolved3 from '../screens/RiddleSolved/RiddleSolved3';
import Levels from '../screens/Levels/Levels';
import Riddle from '../screens/Riddle/Riddle';
import Home from '../screens/Home';
import { SettingContextProvider } from '../context/SettingContext';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SettingContextProvider>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="Home" component={Start} />
          <Stack.Screen name="First-Screen" component={Home} />
          <Stack.Screen name="Levels" component={Levels} />
          <Stack.Screen name="Riddle" component={Riddle} />
          <Stack.Screen name="RiddleSolved2" component={RiddleSolved2} />
          <Stack.Screen name="RiddleSolved1" component={RiddleSolved1} />
          <Stack.Screen name="RiddleSolved3" component={RiddleSolved3} />
        </Stack.Navigator>
      </SettingContextProvider>
    </NavigationContainer>
  );
}
