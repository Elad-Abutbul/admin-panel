import { TextInput } from "react-native";
export function TextInput_uk({ stateFunction, stateValue, styleTextInput }) {
  return (
    <TextInput
      style={styleTextInput}
      onChange={(event) => stateFunction(event.nativeEvent.text)}
      value={stateValue}
    />
  );
}
