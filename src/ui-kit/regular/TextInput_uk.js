import { TextInput } from "react-native";
export function TextInput_uk({ stateFunction, stateValue }) {
  return (
    <TextInput
      onChange={(event) => stateFunction(event.nativeEvent.text)}
      value={stateValue}
    />
  );
}

