import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient' // 그라디언트 효과 라이브러리

export default function Weather(props) {
    console.log(props)
    return <View style={styles.container}>
        <LinearGradient color={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.container}
        >
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-lightning-rainy" size={80} color="black" />
                <Text style={styles.temp}>
                    {props.temp}C

                </Text>
            </View>
            <View style={styles.halfContainer}></View>
        </LinearGradient>
    </View >
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 35
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})