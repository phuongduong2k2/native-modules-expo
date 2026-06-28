import {
  Form,
  Gauge,
  Host,
  Picker,
  Section,
  Text,
  TextField,
  VStack,
} from "@expo/ui/swift-ui";
import { gaugeStyle, pickerStyle, tag } from "@expo/ui/swift-ui/modifiers";
import React from "react";

type Props = {};

const CustomForm = (props: Props) => {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <TextField placeholder="Title" />
          <TextField placeholder="Description" />
        </Section>
        <Picker modifiers={[pickerStyle("menu")]}>
          <Text modifiers={[tag("option1")]}>Option 1</Text>
          <Text modifiers={[tag("option2")]}>Option 2</Text>
        </Picker>
        <VStack spacing={16}>
          <Gauge value={0.5} modifiers={[gaugeStyle("circular")]}>
            <Text>Circular</Text>
          </Gauge>
          <Gauge value={0.5} modifiers={[gaugeStyle("circularCapacity")]}>
            <Text>Circular Capacity</Text>
          </Gauge>
          <Gauge value={0.5} modifiers={[gaugeStyle("linear")]}>
            <Text>Linear</Text>
          </Gauge>
          <Gauge value={0.5} modifiers={[gaugeStyle("linearCapacity")]}>
            <Text>Linear Capacity</Text>
          </Gauge>
        </VStack>
      </Form>
    </Host>
  );
};

export default CustomForm;
