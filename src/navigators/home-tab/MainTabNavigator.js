import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/app/home/HomeScreen';
import ProfileScreen from '../../screens/app/profile/ProfileScreen';
import colors from './../../style/shared/colors/colors';
import BlogScreenNavigator from './../stack/BlogScreenNavigator';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:
                {
                    backgroundColor: colors.main,
                    width: '100%',
                    paddingVertical:5,
                    height:60

                },
                tabBarLabelStyle: { color: colors.light, fontSize:12 },
                headerShown: false
            }}
            sceneContainerStyle=
            {{
                backgroundColor: '#fff',
                paddingHorizontal: 10,
                flex: 1
            }}
        >

            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <FontAwesome name="home" size={26} color={colors.light} />,
                    tabBarLabel: "Home",

                }}
            />
            <Tab.Screen
                name="BlogScreenNavigator"
                component={BlogScreenNavigator}
                options={{
                    tabBarIcon: () => <Entypo name="text-document" size={26} color={colors.light} />,
                    tabBarLabel: "Blogs"
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => <MaterialIcons name="account-circle" size={24} color={colors.light} />,
                    tabBarLabel: "Profile"
                }}
            />

        </Tab.Navigator>
    )
}

export default MainTabNavigator