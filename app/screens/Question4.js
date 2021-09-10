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

function Question4({navigation}) {

return (
    <QuestionScreen 
        options = {options}
        title = 'Question 4'
        onPress={() => navigation.navigate(routes.QUESTION5)}
    />
)
}

const styles = StyleSheet.create({
    
})

export default Question4;