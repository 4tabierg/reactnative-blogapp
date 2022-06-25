import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, buttonTitle, buttonStyle}) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={[styles.button, buttonStyle]}>
            <Text style={{ color: "#fff" }}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    onPress: () => console.log("Button pressed!"),
    buttonTitle: "Button Title",
    buttonStyle: {}
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.main,
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
});
