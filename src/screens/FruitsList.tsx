import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const FruitsList = (props: Props) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search fruits",
        onChange: (e: any) => {
          setSearch(e.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Search: {search}</Text>
    </SafeAreaView>
  );
};

export default FruitsList;
