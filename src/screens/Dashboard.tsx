import CustomForm from "@/components/CustomForm";
import { useInitialURL } from "@/hooks/useInitialURL";
import { useNavigation } from "@react-navigation/native";
import * as Updates from "expo-updates";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Dashboard() {
  const navigation = useNavigation();
  const { isUpdatePending, isDownloading } = Updates.useUpdates();
  const { processing, url } = useInitialURL();
  const [language, setLanguage] = useState("java");

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        borderWidth: 1,
        flex: 1,
      }}
    >
      <CustomForm />
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
