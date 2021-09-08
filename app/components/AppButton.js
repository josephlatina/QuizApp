import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function AppButton({title, onPress, style}) { 
    return (
        <TouchableOpacity 
            style={[styles.button, style]} //results in a combination of styles where any overlapping property is overridden by the second property
            onPress={onPress}>                                        
            <Text style={[styles.text, style]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: "70%",
        marginVertical: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 10,
    },
    text: {
        color: 'black',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;