import React from 'react';
import LottieView from 'lottie-react-native';

function WelcomeAnimation({visible=false}) {
    if (!visible) return null;
    return (
        <LottieView 
            autoPlay
            loop
            source={require('../assets/animations/quiz-bump.json')}
        />
    );
}

export default WelcomeAnimation;