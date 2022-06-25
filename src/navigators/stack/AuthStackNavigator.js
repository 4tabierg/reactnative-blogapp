import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './../../screens/auth/login/LoginScreen';
import RegisterScreen from './../../screens/auth/register/RegisterScreen';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ lazy: false }} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator
