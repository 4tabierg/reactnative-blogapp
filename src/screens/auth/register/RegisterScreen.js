import { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/common/Button';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import colors from '../../../style/shared/colors/colors';
import { AuthContext } from './../../../contexts/AuthContext';

const RegisterScreen = ({ navigation }) => {

  const { handleRegister, isLoading, error } = useContext(AuthContext)

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSecure, setPasswordSecure] = useState("");

  const handleOnPressLogin = async () => {
    if (!username && !password && !passwordSecure) {
      Alert.alert("Oops...", "User name and password cannot be empty!")
    }
    else if (password !== passwordSecure) {
      Alert.alert("Oops...", "Password fields are not mathcing!")
    }
    else {
      handleRegister({ userName: username, password })
      !isLoading && error.length !== 0 &&
        Alert.alert("Oops...", error)
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
          <TextInput
            secureTextEntry={true}
            onChangeText={(text) => setPasswordSecure(text)}
            value={passwordSecure}
            placeholder='Password Again'
            style={styles.textInput}
          />
          <View style={{ alignItems: 'center' }}>
            <Button buttonTitle={"Register"} onPress={handleOnPressLogin} />
            <TouchableOpacity style={styles.registerText} onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={{ color: colors.main, fontWeight: "bold" }}>If you have an account, login!</Text>
            </TouchableOpacity>
          </View>
        </>

      }
    </View>
  )
}

export default RegisterScreen

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
    width: 210,
    height: 30,
    marginTop: 20
  }
});