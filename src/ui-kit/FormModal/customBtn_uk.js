import { TouchableOpacity, Text } from "react-native";
export function CustomBtn_uk({ textValue, handleFunc }) {
  return (
    <TouchableOpacity onPress={handleFunc} style={{ color: "white" }}>
      <Text>{textValue}</Text>
    </TouchableOpacity>
  );
}
