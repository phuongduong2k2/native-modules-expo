import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Button as NativeButton } from "react-native";

export function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Text>Navigate using Navigation Button Elements</Text>
      <Button screen="Profile" params={{ user: "jane" }}>
        Go to Profile
      </Button>
      <Text>Navigate using hook</Text>
      <NativeButton
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { user: "Nolan" })}
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
