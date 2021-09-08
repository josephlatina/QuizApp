import React from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';

import AppButton from './AppButton';
import Screen from './Screen';

function QuestionScreen({ children, style }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.png")}
        >
            <View 
                style={styles.questionBox}
            >
                <Image 
                    style={styles.image}
                    resizeMode= 'contain'
                    source={require("../assets/questionBox.png")}
                />
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
    buttonContainer: {
        position: 'absolute',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 640
    }
})

export default QuestionScreen;