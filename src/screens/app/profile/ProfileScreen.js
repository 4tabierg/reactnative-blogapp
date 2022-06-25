import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from './../../../contexts/AuthContext';
import colors from './../../../style/shared/colors/colors';

const ProfileScreen = () => {

    const { handleLogout } = useContext(AuthContext)
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Entypo name="text-document" size={28} color={colors.light} style={{ marginLeft: 18 }} />
                <Text style={styles.buttonTitle}>My Blogs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Ionicons name="settings" size={28} color={colors.light} style={{ marginLeft: 18 }} />
                <Text style={styles.buttonTitle}>Profile Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <MaterialIcons name="favorite-border" size={28} color={colors.light} style={{ marginLeft: 18 }} />
                <Text style={styles.buttonTitle}>Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
                <MaterialIcons name="logout" size={28} color={colors.light} style={{ marginLeft: 18 }} />
                <Text style={styles.buttonTitle}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        height: 40,
        borderRadius: 7,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.main
    },
    buttonTitle: {
        color: colors.light,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
    }
})