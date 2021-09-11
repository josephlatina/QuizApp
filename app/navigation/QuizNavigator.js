import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import routes from './routes';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';
import Question3 from '../screens/Question3';
import Question4 from '../screens/Question4';
import Question5 from '../screens/Question5';

const Stack = createStackNavigator();

const QuizNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name={routes.WELCOME}
            component={WelcomeScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name={routes.QUESTION1}
            component={Question1}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name={routes.QUESTION2}
            component={Question2}
            // options={{headerShown: false}}
        />
        <Stack.Screen 
            name={routes.QUESTION3}
            component={Question3}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name={routes.QUESTION4}
            component={Question4}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name={routes.QUESTION5}
            component={Question5}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
)

export default QuizNavigator;