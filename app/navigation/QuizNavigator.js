import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const QuizNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen />
    </Stack.Navigator>
)

export default QuizNavigator;