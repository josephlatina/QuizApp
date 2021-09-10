import React from 'react';
import { StyleSheet, View } from 'react-native';

import QuestionScreen from '../components/QuestionScreen';

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

function Question5() {

return (
    <QuestionScreen 
        options = {options}
        title = 'Question 5'
    />
)
}

const styles = StyleSheet.create({
    
})

export default Question5;