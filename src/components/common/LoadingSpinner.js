import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../style/shared/colors/colors';

const windowHeight = Dimensions.get('window').height;

const LoadingSpinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.main} />
        </View>
    )
}

export default LoadingSpinner

const styles = StyleSheet.create({
    container: {
        marginTop: windowHeight / 3
    }
})