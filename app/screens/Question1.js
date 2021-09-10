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

const [result, setResult] = useState(0);

const handlePress = () => {
    if (id==2) 
        setResult(result++)
}

function Question1({navigation}) {

return (
    <QuestionScreen 
        options = {options}
        title = 'Question 1'
        subtitle = 'When was the first release of the Apple Watch?'
        onPress={() => navigation.navigate(routes.QUESTION2, result)}
        optionOnPress={handlePress}
    />
)
}

const styles = StyleSheet.create({
    
})

export default Question1;