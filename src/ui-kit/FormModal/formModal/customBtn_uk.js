import { TouchableOpacity, Text } from "react-native";
export function customBtn({ styleCustomBtn, handleFunc }) {
  return (
    <TouchableOpacity>
      <Text onPress={handleFunc} style={styleCustomBtn}></Text>
    </TouchableOpacity>
  );
}
