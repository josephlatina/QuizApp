import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from "react-native";
import AnimatedLottieView from 'lottie-react-native';

import AppButton from '../components/AppButton';
import WelcomeAnimation from '../components/WelcomeAnimation';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {

    return (
      <ImageBackground 
          style={styles.background}
          source={require("../assets/background.png")} 
      >
        <WelcomeAnimation 
          style={{position: 'absolute', top: -50}}
          visible={true}
        />
        <View style={styles.buttonsContainer}>
          <AppButton 
            title="Play"
            onPress={() => navigation.navigate(routes.QUESTION1)}
          />
        </View>
      </ImageBackground>
    );
  }
  
  //Creating the styles container
  const styles = StyleSheet.create({
    
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
      padding: 20,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      top: -80
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      position: 'absolute',
      top: 50,
      alignItems: "center",
    },
    tagline: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingVertical: 20,
    }
  });
  
  export default WelcomeScreen;