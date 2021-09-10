import React from 'react';
import { StyleSheet, View } from 'react-native';

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

function Question3({navigation}) {

return (
    <QuestionScreen 
        options = {options}
        title = 'Question 3'
        onPress={() => navigation.navigate(routes.QUESTION4)}
    />
)
}

const styles = StyleSheet.create({
    
})

export default Question3;