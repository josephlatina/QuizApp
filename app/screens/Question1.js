import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


import QuestionScreen from '../components/QuestionScreen';
import routes from '../navigation/routes';

const options = [
    {
        id: 1,
        text: 'None'
    },
    {
        id: 2,
        text: '4'
    },
    {
        id: 3,
        text: '5'
    },
    {
        id: 4,
        text: '7'
    },
]

function Question1({navigation}) {
    const [result, setResult] = useState(0);
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [visible, setVisible] = useState(true);

    const handlePress = (id) => {
        setVisible(false);
        if (id === 3) {
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
                title = 'Question 1'
                subtitle = 'How many rings are on the Olympic Flag'
                onPress={() => navigation.navigate(routes.QUESTION2, result)}
                optionOnPress={handlePress}
            />}
            { correct && 
                <View style={styles.container} >
                    <LottieView 
                        style = {{flex: 1, position: 'absolute', left: 40, backgroundColor: '#ffbc14'}}
                        autoPlay
                        loop = {false}
                        source={require('../assets/animations/checkmark.json')}
                        onAnimationFinish = {() => navigation.navigate(routes.QUESTION2, result)}
                    />
                </View>
            }
            { incorrect && 
                <View style={styles.container}>
                    <LottieView 
                        style = {{flex: 1, height: '80%', width: '80%', backgroundColor: '#ffbc14'}}
                        autoPlay
                        loop = {false}
                        speed = {2}
                        source={require('../assets/animations/error.json')}
                        onAnimationFinish = {() => navigation.navigate(routes.QUESTION2, result)}
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