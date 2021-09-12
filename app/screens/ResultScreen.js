import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, FlatList, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function ResultScreen({navigation, route}) {

    const result = route.params;
    let animation, message;

    if (result > 2) {
        animation = 
            <LottieView 
                style={styles.animationContainer}
                autoPlay
                loop = {true}
                source={require('../assets/animations/success.json')}
            />;
        message = <Text style={styles.messageContainer}>{"Congratulations! You passed the quiz. Your score is " + result + "/5"}</Text>;
    } else {
        animation = 
            <LottieView 
                style={styles.animationContainer}
                autoPlay
                loop = {true}
                source={require('../assets/animations/fail.json')}
            />
        message = <Text style={styles.messageContainer}>{"Sorry, you have failed the quiz. Your score is " + result + "/5"}</Text>;
    }
    
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.png")}
        >
            {animation}
            {message}
            <View style={styles.buttonContainer}>
                <AppButton 
                    title="Home"
                    onPress={() => navigation.navigate(routes.WELCOME)}
                />
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
    animationContainer: {
        position: 'absolute',
        top: -150
    },
    messageContainer: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15,
        position: 'absolute',
        top: 400
    },
    buttonContainer: {
        position: 'absolute',
        top: 600,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default ResultScreen;