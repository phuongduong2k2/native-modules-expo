import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import * as SecureStore from "expo-secure-store";

async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value, {
    requireAuthentication: true,
  });
}

async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key, {
    requireAuthentication: true,
  });
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}

export function Settings() {
  const [key, onChangeKey] = useState("Your key here");
  const [value, onChangeValue] = useState("Your value here");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Check Biometric"
          onPress={() => {
            alert(String(SecureStore.canUseBiometricAuthentication()));
          }}
        />
        <Text style={styles.paragraph}>Save an item, and grab it later!</Text>
        <Button
          title="Save this key/value pair"
          onPress={() => {
            save("haha", "Data");
          }}
        />
        <Text style={styles.paragraph}>🔐 Enter your key 🔐</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          onSubmitEditing={(event) => {
            getValueFor(event.nativeEvent.text);
          }}
          placeholder="Enter the key for the value you want to get"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    height: 35,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 4,
  },
});
