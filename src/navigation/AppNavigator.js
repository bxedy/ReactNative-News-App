import React from "react";
import { Ionicons } from '@expo/vector-icons';


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NewsListScreen from "../screens/NewsListScreen";
import NewsFavoritesScreen from "../screens/NewsFavoritesScreen";
import NewsDetailScreen from "../screens/NewsDetailScreen";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
    return (
        <TopTab.Navigator screenOptions={{tabBarLabelStyle: {fontSize : 12}, tabBarScrollEnabled: true, tabBarBounces: true}}>
            <TopTab.Screen name="Negócios" component={NewsListScreen} />
            <TopTab.Screen name="Entretenimento" component={NewsListScreen} />
            <TopTab.Screen name="Saúde" component={NewsListScreen} />
            <TopTab.Screen name="Ciência" component={NewsListScreen} />
            <TopTab.Screen name="Esportes" component={NewsListScreen} />
            <TopTab.Screen name="Tecnologia" component={NewsListScreen} />
        </TopTab.Navigator>
    )

}

function HomeNavigator () {
    return (
    <Stack.Navigator>
        <Stack.Screen 
            name= 'NewsNav'
            component={TopTabNavigator}
            options={{ title: 'News' }}
        />
        <Stack.Screen
            name='NewsDetails'
            component={NewsDetailScreen}
            options={{ title: 'Details' }}
        />
    </Stack.Navigator>
    )
}


function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator screenOptions={
                ({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        if (route.name == 'News') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline'
                        } else if (route.name == 'Favorites') {
                            iconName = focused
                                ? 'bookmark'
                                : 'bookmark-outline'
                        }
                        return <Ionicons name={iconName} size={25} />
                    }
                })
            }>
                <BottomTab.Screen name="News" component={HomeNavigator} options={{headerShown: false}}/>
                <BottomTab.Screen name="Favorites" component={NewsFavoritesScreen}/>
            </BottomTab.Navigator>
        </NavigationContainer>
    )

}






export default BottomTabNavigator;