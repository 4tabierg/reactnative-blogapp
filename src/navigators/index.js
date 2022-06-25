
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';
import MainTabNavigator from './home-tab/MainTabNavigator';
import AuthScreenStack from './stack/AuthStackNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {

    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {!isLoggedIn ?
                <Stack.Screen name="AuthScreenStack" component={AuthScreenStack} options={{ lazy: false }} />
                : <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{ headerShown: false }} />
            }
        </Stack.Navigator>
    )
}

export default MainStackNavigator