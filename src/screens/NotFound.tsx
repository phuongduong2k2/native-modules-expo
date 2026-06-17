import { Text } from "@react-navigation/elements";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, View } from "react-native";

export function NotFound() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>404</Text>
      <Button
        title="Dismiss to Top"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
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
