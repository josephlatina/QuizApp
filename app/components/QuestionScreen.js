import { CardAnimationContext } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ImageBackground, View, FlatList, Text } from 'react-native';

import AppButton from './AppButton';
import Card from './Card';
import Screen from './Screen';

// const options = [
//     {
//         id: 1,
//         text: 'Option1'
//     },
//     {
//         id: 2,
//         text: 'Option2'
//     },
//     {
//         id: 3,
//         text: 'Option3'
//     },
//     {
//         id: 4,
//         text: 'Option4'
//     },
// ]

function QuestionScreen({ children, style, options }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.png")}
        >
            <View 
                style={styles.questionBox}
            >
                <ImageBackground
                    style={styles.image}
                    source={require("../assets/questionBox.png")}
                >
                    <Text style={styles.question}>Question 1</Text>
                    <View style={styles.optionsContainer}>
                        <FlatList 
                            data={options}
                            keyExtractor={option => option.id.toString()}
                            renderItem={({ item }) =>
                                <Card 
                                    text={item.text}
                                    onPress={() => console.log("Option Selected", item)}
                                />
                            }
                        />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='Submit'/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    questionBox: {
        width: '85%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 20,
        position: 'absolute',
        top: 100,
        overflow: 'hidden'
    },
    question: {
        position: 'absolute',
        top: 80,
        fontSize: 20,
        // textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    optionsContainer: {
        padding: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 640
    }
})

export default QuestionScreen;