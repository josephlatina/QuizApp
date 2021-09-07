import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View, ImageBackground } from 'react-native';

function QuestionScreen({ children, style }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.png")}
        >
            <SafeAreaView style={[styles.screen, style]}>
                <View style={[styles.view, style]}>{children}</View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    screen: {
        paddingTop: Constants.statusBarHeight, //ensures that there is enough padding at the top of the screen so the status bar does not cover screen contents
        flex: 1,
    },
    view: {
        flex: 1,
    }
})

export default QuestionScreen;