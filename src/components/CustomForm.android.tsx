import {
  Button,
  Card,
  Column,
  Host,
  RNHostView,
  Row,
  SearchBar,
  Text,
  TooltipBox,
} from "@expo/ui/jetpack-compose";
import { fillMaxWidth, padding } from "@expo/ui/jetpack-compose/modifiers";
import React, { useState } from "react";
import { Pressable, Text as RNText } from "react-native";

type Props = {};

const LANGUAGES = [
  { label: "Java", value: "java" },
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" },
];

const CustomForm = (props: Props) => {
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <Host style={{ flex: 1 }}>
      <Card modifiers={[fillMaxWidth()]}>
        <Column
          verticalArrangement={{ spacedBy: 12 }}
          modifiers={[padding(16, 16, 16, 16)]}
        >
          <Text>Mixing RN Components with Compose</Text>
          <SearchBar onSearch={(searchText) => setQuery(searchText)} />
          <TooltipBox>
            <TooltipBox.PlainTooltip>
              <Text>Add to favorites</Text>
            </TooltipBox.PlainTooltip>
            <Button onClick={() => {}}>
              <Text>Favorite</Text>
            </Button>
          </TooltipBox>
          <Row
            horizontalArrangement={{ spacedBy: 24 }}
            verticalAlignment="center"
          >
            <RNHostView matchContents>
              <Pressable
                onPress={() => setCounter((prev) => prev - 1)}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#9B59B6",
                }}
              >
                <RNText style={{ color: "white", fontSize: 24 }}>-</RNText>
              </Pressable>
            </RNHostView>
            <Text>{counter}</Text>
            <RNHostView matchContents>
              <Pressable
                onPress={() => setCounter((prev) => prev + 1)}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#9B59B6",
                }}
              >
                <RNText style={{ color: "white", fontSize: 24 }}>+</RNText>
              </Pressable>
            </RNHostView>
          </Row>
        </Column>
      </Card>
    </Host>
  );
};

export default CustomForm;
