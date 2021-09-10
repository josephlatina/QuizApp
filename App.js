import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import QuestionScreen from './app/components/QuestionScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Question1 from './app/screens/Question1';
import QuizNavigator from './app/navigation/QuizNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <QuizNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
