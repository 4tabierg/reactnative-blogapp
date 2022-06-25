import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../../screens/app/home/HomeScreen';
import BlogsScreen from './../../screens/app/home/BlogsScreen';
import BlogDetailScreen from './../../screens/app/home/BlogDetailScreen';
import BlogEditScreen from './../../screens/app/home/BlogEditScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="BlogsScreen" component={BlogsScreen} options={{lazy:false}}/>
            <Stack.Screen name="BlogDetailScreen" component={BlogDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="BlogEditScreen" component={BlogEditScreen} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})