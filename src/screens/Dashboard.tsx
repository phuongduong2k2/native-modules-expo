import { useInitialURL } from "@/hooks/useInitialURL";
import { schedulePushNotification } from "@/services/notifications";
import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import * as Updates from "expo-updates";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  View,
} from "react-native";
import ExpoLocationsModule from "../../modules/expo-locations/src/ExpoLocationsModule";
import ExpoSettingsModule from "../../modules/expo-settings/src/ExpoSettingsModule";

export function Dashboard() {
  const navigation = useNavigation();
  const { isUpdatePending, isDownloading } = Updates.useUpdates();
  const { processing, url } = useInitialURL();

  return (
    <View style={styles.container}>
      <Text>Home Screen New Update v6</Text>
      {processing ? (
        <ActivityIndicator color={"green"} />
      ) : (
        <Text>Linking URL: {url}</Text>
      )}
      <Button
        title="Settings"
        onPress={() => navigation.navigate("FruitsList")}
      />
      {isDownloading && <ActivityIndicator color={"green"} />}
      {isUpdatePending && (
        <Button title="Reload now" onPress={() => Updates.reloadAsync()} />
      )}
      <Button
        title="expo settings"
        onPress={() => Alert.alert(ExpoSettingsModule.hello())}
      />
      <Button
        title="expo locations"
        onPress={() => Alert.alert(ExpoLocationsModule.getLocation())}
      />
      <Button
        title="Check update"
        onPress={async () => {
          try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
              await Updates.fetchUpdateAsync();
            }
          } catch (error) {
            Alert.alert("Latest");
          }
        }}
      />
      <Button
        title="Press to schedule a notificaiton"
        onPress={schedulePushNotification}
      />
      <Button
        title="Set push notification"
        onPress={schedulePushNotification}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
