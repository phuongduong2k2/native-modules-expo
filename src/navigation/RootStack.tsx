import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Dashboard } from "@/screens/Dashboard";
import FruitsList from "@/screens/FruitsList";
import { Settings } from "@/screens/Settings";
import { Updates } from "@/screens/Updates";
import { RootStackParamList, TabParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FruitsList" component={FruitsList} options={{}} />
    </Stack.Navigator>
  );
};

const Tab = createNativeBottomTabNavigator<TabParamList>();

const RootStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: {
            type: "sfSymbol",
            name: "house",
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: {
            type: "sfSymbol",
            name: "gear",
          },
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: {
            type: "sfSymbol",
            name: "gear.badge",
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{ tabBarSystemItem: "search" }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
