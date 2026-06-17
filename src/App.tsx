import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { StatusBar, useColorScheme } from "react-native";
import RootStack from "./navigation/RootStack";
import * as Notifications from "expo-notifications";
import useNotification from "./hooks/useNotification";

Asset.loadAsync([
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  const { channels, expoPushToken, notification } = useNotification();

  return (
    <NavigationContainer
      theme={theme}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    >
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <RootStack />
    </NavigationContainer>
  );
}
