import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, FlatList, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import routes from '../navigation/routes';

function ResultScreen({navigation, route}) {

    const result = route.params;
    let animation, message;

    if (result > 2) {
        animation = 
            <LottieView 
                autoPlay
                loop = {true}
                source={require('../assets/animations/success.json')}
            />;
        message = "Congratulations! You passed the quiz. Your score is " + result + "/5";
    } else {
        animation = 
            <LottieView 
                autoPlay
                loop = {true}
                source={require('../assets/animations/fail.json')}
            />
        message = "Sorry, you have failed the quiz. Your score is " + result + "/5";
    }
    
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.png")}
        >
            {animation}
            {message}
            <AppButton 
                title="Back to HomeScreen"
                onPress={() => navigation.navigate(routes.WELCOME)}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
})


export default ResultScreen;