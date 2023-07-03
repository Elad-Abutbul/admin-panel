import { Text, StyleSheet } from "react-native";
export function Text_uk({ textValue }) {
  return <Text style={styles.text}>{textValue}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
