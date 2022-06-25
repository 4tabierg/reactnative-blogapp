import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../style/shared/colors/colors';

const Header = ({ headerTitle }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{headerTitle}</Text>
        </View>
    );
};

Header.defaultProps = {
    headerTitle: 'HEADER TITLE'
}

export default Header;

const styles = StyleSheet.create({
    header: {
        color: colors.light,
        fontWeight: "bold",
        fontSize: 16
    },
    headerContainer: {
        width: "100%",
        height: 30,
        backgroundColor: colors.main,
        alignItems: "center",
        justifyContent: "center",
        //marginTop:-35
    },
});
