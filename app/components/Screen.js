import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View } from 'react-native';

function Screen({ children, style, ...otherProps }) {
    return (
        <SafeAreaView style={[styles.screen, style]} {...otherProps}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight, //ensures that there is enough padding at the top of the screen so the status bar does not cover screen contents
        flex: 1,
    },
    view: {
        flex: 1,
    }
})

export default Screen;