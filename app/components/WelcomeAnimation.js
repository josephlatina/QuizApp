import React from 'react';
import LottieView from 'lottie-react-native';

function WelcomeAnimation({children, visible=false, ...otherProps}) {
    if (!visible) return null;
    return (
        <LottieView 
            autoPlay
            loop
            source={require('../assets/animations/quiz-bump.json')}
            {...otherProps}
        />
    );
}

export default WelcomeAnimation;