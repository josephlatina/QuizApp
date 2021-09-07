import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from "react-native";

import AppButton from '../components/AppButton';

function WelcomeScreen() {

    return (
      <ImageBackground 
          blurRadius={2}
          style={styles.background}
          source={require("../assets/background.jpg")} 
      >
        <View style={styles.logoContainer}>
            <Text style={styles.tagline}>Quiz Time!</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton 
            title="Play"
            //onPress={() => navigation.navigate("Login")}
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
      top: -100
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      position: 'absolute',
      top: 70,
      alignItems: "center",
    },
    tagline: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingVertical: 20,
    }
  });
  
  export default WelcomeScreen;