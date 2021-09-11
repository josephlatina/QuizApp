import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import QuestionScreen from '../components/QuestionScreen';
import routes from '../navigation/routes';

const options = [
    {
        id: 1,
        text: 'Option1'
    },
    {
        id: 2,
        text: 'Option2'
    },
    {
        id: 3,
        text: 'Option3'
    },
    {
        id: 4,
        text: 'Option4'
    },
]

function Question1({navigation}) {
    const [result, setResult] = useState(0);

    const handlePress = (id) => {
        if (id === 2) 
            setResult(result+1)
        return (
            <LottieView 
            style = {{height: '100%', width: '100%', backgroundColor: 'white'}}
            autoPlay = {false}
            resizeMode = 'cover'
            flexGrow = {1}
            loop = {false}
            source={require('../assets/animations/quiz-bump.json')}
            onAnimationFinish = {navigation.navigate(routes.QUESTION2, result)}
            />
        )
    }

    return (
        <QuestionScreen 
            options = {options}
            title = 'Question 1'
            subtitle = 'When was the first release of the Apple Watch?'
            onPress={() => navigation.navigate(routes.QUESTION2, result)}
            optionOnPress={handlePress} //use callback function to pass in the id number of the button selected from child component to parent component
        />
    )
    }

const styles = StyleSheet.create({
    
})

export default Question1;