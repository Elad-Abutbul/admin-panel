import { TouchableOpacity, Text } from "react-native";
export function CustomBtn_uk({ textValue, handleFunc }) {
  return (
    <TouchableOpacity onPress={handleFunc}>
      <Text style={{ color: "white" }}>{textValue}</Text>
    </TouchableOpacity>
  );
}
