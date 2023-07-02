import { View } from "react-native";
import React from "react";
import { TextInput_uk, Text_uk } from "../../../ui-kit/regular";

const ViewContent = ({ stateFunction, stateValue, textValue }) => {
  return (
    <View>
      <Text_uk textValue={textValue} />
      <TextInput_uk stateFunction={stateFunction} stateValue={stateValue} />
    </View>
  );
};

export default ViewContent;
