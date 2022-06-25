import { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/common/Button';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import colors from '../../../style/shared/colors/colors';
import { AuthContext } from './../../../contexts/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {

    const { handleLogin, isLoading } = useContext(AuthContext)

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isRememberChecked, setIsRememberChecked] = useState(false);

    const handleOnPressLogin = async () => {
        if (!username && !password) {
            Alert.alert("Oops...", "User name and password cannot be empty!")
        }
        else {
            handleLogin({ username, password }, isRememberChecked)
        }
    }

    return (
        <View style={styles.container}>
            {isLoading ? <LoadingSpinner />
                :
                <>
                    <Text style={styles.logo}>BlogApp</Text>
                    <TextInput
                        onChangeText={(text) => setUserName(text)}
                        value={username}
                        placeholder='User Name'
                        style={styles.textInput}
                    />
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder='Password'
                        style={styles.textInput}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <View >
                            <Button buttonTitle={"Login"} onPress={handleOnPressLogin} />
                        </View>
                        <TouchableOpacity onPress={() => setIsRememberChecked(prevState => !prevState)} style={{ marginTop: 10, marginRight: 5, flexDirection: "row", alignItems: "center" }}>
                            {!isRememberChecked ?
                                <MaterialIcons name="check-box-outline-blank" size={24} color="black" style={{ color: colors.main }} />
                                : <MaterialIcons name="check-box" size={24} color="black" style={{ color: colors.main }} />
                            }
                            <Text style={{ fontWeight: "bold" }}>Remember me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.registerText} onPress={() => navigation.navigate("RegisterScreen")}>
                            <Text style={{ color: colors.main, fontWeight: "bold" }}>Press here to register!</Text>
                        </TouchableOpacity>
                    </View>
                </>

            }
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        fontWeight: "bold",
        color: colors.main,
        fontSize: 40,
        alignSelf: "center",
        marginVertical: 20,
    },
    container: {
        paddingHorizontal: 10,
    },
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 300,
        alignSelf: "center",
        height: 24,
        marginTop: 5,
        borderColor: colors.main,
    },
    registerText: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.main,
        borderRadius: 10,
        width: 200,
        height: 30,
        marginTop: 20
    }
});