import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


import QuestionScreen from '../components/QuestionScreen';
import routes from '../navigation/routes';

const options = [
    {
        id: 1,
        text: 'Bear'
    },
    {
        id: 2,
        text: 'Rabbit'
    },
    {
        id: 3,
        text: 'Dragon'
    },
    {
        id: 4,
        text: 'Dog'
    },
]

function Question1({navigation, route}) {
    const [result, setResult] = useState(route.params);
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [visible, setVisible] = useState(true);

    const handlePress = (id) => {
        setVisible(false);
        if (id === 1) {
            setResult(result+1)
            setCorrect(true);
        }
        else
            setIncorrect(true);
    }

    return (
        <>
            {visible && <QuestionScreen 
                options = {options}
                title = 'Question 2'
                subtitle = 'Which of these animals does NOT appear in the Chinese zodiac?'
                onPress={() => navigation.navigate(routes.QUESTION3, result)}
                optionOnPress={handlePress}
            />}
            { correct && 
                <View style={styles.container} >
                    <LottieView 
                        style = {{flex: 1, position: 'absolute', left: 50, backgroundColor: '#ffbc14'}}
                        autoPlay
                        loop = {false}
                        source={require('../assets/animations/checkmark.json')}
                        onAnimationFinish = {() => navigation.navigate(routes.QUESTION3, result)}
                    />
                </View>
            }
            { incorrect && 
                <View style={styles.container}>
                    <LottieView 
                        style = {{flex: 1, height: '100%', width: '100%', backgroundColor: '#ffbc14'}}
                        autoPlay
                        loop = {false}
                        speed = {2}
                        source={require('../assets/animations/error.json')}
                        onAnimationFinish = {() => navigation.navigate(routes.QUESTION3, result)}
                    />
                </View>
            }
      </>
    )
    }

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffbc14'
    }
})

export default Question1;