import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

function Card({ text, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 250,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 10,
        marginBottom: 20
    },
    text: {
        color: 'black',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: '600',
    }
})

export default Card;