import BlogDetailScreen from '../../screens/app/blog/BlogDetailScreen';
import BlogEditScreen from './../../screens/app/blog/BlogEditScreen';
import BlogsScreen from './../../screens/app/blog/BlogsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

const BlogScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="BlogsScreen" component={BlogsScreen} options={{ lazy: false }} />
            <Stack.Screen name="BlogDetailScreen" component={BlogDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="BlogEditScreen" component={BlogEditScreen} />
        </Stack.Navigator>
    )
}

export default BlogScreenNavigator