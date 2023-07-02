import { Text, StyleSheet } from "react-native";
export function Text_uk({ textValue, textValue2 }) {
  return (
    <Text style={styles.text}>
      {textValue} {textValue2}
    </Text>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
